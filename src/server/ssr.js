import express from "express";
import { renderToString } from "react-dom/server";
import { fillJSXwithClientComponents, parseJSX } from "../utils/index.js";

const app = express();
app.use(express.static("public"));

app.use(async (req, res, next) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const response = await fetch("http://127.0.0.1:8081" + url.pathname);
    if (!response.ok) {
      res.statusCode = response.status;
      res.end();
      return;
    }
    const clientJSXString = await response.text();
    if (url.searchParams.has("jsx")) {
      // If the user is navigating between pages, send that serialized JSX as is
      res.setHeader("Content-Type", "application/json");
      res.end(clientJSXString);
    } else {
      // If this is an initial page load, revive the tree and turn it into HTML
      const clientJSX = JSON.parse(clientJSXString, parseJSX);
      const fixedJSX = await fillJSXwithClientComponents(clientJSX);
      let html = renderToString(fixedJSX);
      html += `<script>window.__INITIAL_CLIENT_JSX_STRING__ = `;
      html += clientJSXString + ";";
      html += `</script>`;
      res.setHeader("Content-Type", "text/html");
      res.end(html);
    }
  } catch (err) {
    next(err);
  }
});

app.use(function (err, req, res) {
  console.error(err);
  res.status(err.status || 500);
  res.send();
});

const port = 8080;

app.listen(port, () => {
  console.log(`ssr listening on port ${port}`);
});

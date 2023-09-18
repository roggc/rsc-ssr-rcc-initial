import React from "react";
import express from "express";
import Router from "./components/server/router.js";
import { renderJSXToClientJSX, stringifyJSX } from "./utils/index.js";

async function sendJSX(res, jsx) {
  const clientJSX = await renderJSXToClientJSX(jsx);
  const clientJSXString = JSON.stringify(clientJSX, stringifyJSX);
  res.setHeader("Content-Type", "application/json");
  res.end(clientJSXString);
}

const app = express();

app.get("/favicon.ico", (req, res, next) => {
  res.send("");
});

app.use(async (req, res, next) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    await sendJSX(res, <Router url={url} />);
  } catch (err) {
    next(err);
  }
});

app.use(function (err, req, res) {
  console.error(err);
  res.status(err.status ?? err.statusCode ?? 500);
  res.send();
});

const port = 8081;

app.listen(port, () => {
  console.log(`rsc listening on port ${port}`);
});

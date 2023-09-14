import React from "react";
import Footer from "./footer.js";
import { useSlice } from "../../../client/slices.js";
import { fillJSXwithClientComponents, parseJSX } from "../../../utils/index.js";
import PreGreeting from "./pre-greeting.js";

export default function Layout({ children }) {
  // const [count, setCount] = React.useState(0);
  const author = "Jae Doe";
  const [count, setCount] = useSlice("count");
  const [JSX, setJSX] = React.useState(children);

  const fetchAndSetNewJSX = (componentName) => {
    if (componentName === "greeting") {
      setJSX(<PreGreeting />);
    } else {
      setJSX(<>loading ...</>);
      fetch(`/${componentName}?jsx`).then(async (response) => {
        const clientJSXString = await response.text();
        const clientJSX = JSON.parse(clientJSXString, parseJSX);
        const fixedClientJSX = await fillJSXwithClientComponents(clientJSX);
        setJSX(fixedClientJSX);
      });
    }
  };

  return (
    <html>
      <head>
        <title>My blog</title>
      </head>
      <body>
        <nav>
          <a onClick={() => fetchAndSetNewJSX("home")}>Home</a>
          <hr />
          <input />
          <hr />
          <button onClick={() => setCount((c) => c + 1)}>+</button>
          {count}
          <hr />
          <button onClick={() => fetchAndSetNewJSX("greeting")}>go</button>
          <hr />
        </nav>
        <main>{JSX}</main>
        <Footer author={author} />
        <script type="module" src="react.development.js" />
        <script type="module" src="react-dom.development.js" />
        <script type="module" src="client.js" />
        <script type="module" src="client/index.js" />
      </body>
    </html>
  );
}

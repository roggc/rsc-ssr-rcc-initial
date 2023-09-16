import React from "react";
import Footer from "./footer.js";
import { useSlice } from "../../../client/slices.js";
import RSC from "./rsc.js";

export default function Layout({ children }) {
  // const [count, setCount] = React.useState(0);
  const author = "Jae Doe";
  const [count, setCount] = useSlice("count");
  const [JSX, setJSX] = React.useState(children);

  const loadingJSX = <>loading ...</>;

  return (
    <html>
      <head>
        <title>My blog</title>
      </head>
      <body>
        <nav>
          <a
            onClick={() => setJSX(<RSC componentName="home">{loadingJSX}</RSC>)}
          >
            Home
          </a>
          <hr />
          <input />
          <hr />
          <button onClick={() => setCount((c) => c + 1)}>+</button>
          {count}
          <hr />
          <button
            onClick={() =>
              setJSX(
                <RSC componentName="greeting" name="Roger">
                  {loadingJSX}
                </RSC>
              )
            }
          >
            go
          </button>
          <hr />
        </nav>
        <main>{JSX}</main>
        <Footer author={author} />
      </body>
    </html>
  );
}

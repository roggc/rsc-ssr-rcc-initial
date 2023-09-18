import React, { useState } from "react";
import Footer from "./footer.js";
import { useSlice } from "../../../client/slices.js";
import RSC from "./rsc.js";

const LoadingPage = ({ page }) => <>loading {page} page...</>;

export default function Layout() {
  const author = "Jae Doe";
  const [count, setCount] = useSlice("count");
  const [count2, reduxDispatch, { increment }] = useSlice("count2");
  const [page, setPage] = useState({ name: "home" });

  return (
    <html>
      <head>
        <title>My blog</title>
      </head>
      <body>
        <nav>
          <a onClick={() => setPage({ name: "home" })}>Home</a>
          <hr />
          <input />
          <hr />
          <button onClick={() => setCount((c) => c + 1)}>+</button>
          {count}
          <hr />
          <button onClick={() => reduxDispatch(increment())}>+</button>
          {count2}
          <hr />
          <button
            onClick={() =>
              setPage({ name: "greeting", props: { name: "Roger" } })
            }
          >
            go
          </button>
          <hr />
        </nav>
        <main>
          <RSC key={page.name} componentName={page.name} {...page.props}>
            <LoadingPage page={page.name} />
          </RSC>
        </main>
        <Footer author={author} />
      </body>
    </html>
  );
}

import React from "react";
import Footer from "./footer.js";

export default function Layout({ children }) {
  const [count, setCount] = React.useState(0);
  const author = "Jae Doe";

  const fetchNewContent = async () => {
    const response = await fetch("/bla?jsx");
    const jsx = await response.json();
    console.log("jsx", jsx);
  };

  return (
    <html>
      <head>
        <title>My blog</title>
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <hr />
          <input />
          <hr />
          <button onClick={() => setCount((c) => c + 1)}>+</button>
          {count}
          <hr />
          <button onClick={fetchNewContent}>go</button>
          <hr />
        </nav>
        <main>{children}</main>
        <Footer author={author} />
        <script type="module" src="react.development.js" />
        <script type="module" src="react-dom.development.js" />
        <script type="module" src="client.js" />
        <script type="module" src="client/index.js" />
      </body>
    </html>
  );
}

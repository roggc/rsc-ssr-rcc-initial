import React from "../../../react.development.js";
import Footer from "./footer.js";
export default function Layout({ children }) {
  const [count, setCount] = React.useState(0);
  const author = "Jae Doe";
  const fetchNewContent = async () => {
    const response = await fetch("/bla?jsx");
    console.log("response", response);
    const data = await response.json();
    console.log("data", data);
  };
  return /*#__PURE__*/ React.createElement(
    "html",
    null,
    /*#__PURE__*/ React.createElement(
      "head",
      null,
      /*#__PURE__*/ React.createElement("title", null, "My blog")
    ),
    /*#__PURE__*/ React.createElement(
      "body",
      null,
      /*#__PURE__*/ React.createElement(
        "nav",
        null,
        /*#__PURE__*/ React.createElement(
          "a",
          {
            href: "/",
          },
          "Home"
        ),
        /*#__PURE__*/ React.createElement("hr", null),
        /*#__PURE__*/ React.createElement("input", null),
        /*#__PURE__*/ React.createElement("hr", null),
        /*#__PURE__*/ React.createElement(
          "button",
          {
            onClick: () => setCount((c) => c + 1),
          },
          "+"
        ),
        count,
        /*#__PURE__*/ React.createElement("hr", null),
        /*#__PURE__*/ React.createElement(
          "button",
          {
            onClick: fetchNewContent,
          },
          "go"
        ),
        /*#__PURE__*/ React.createElement("hr", null)
      ),
      /*#__PURE__*/ React.createElement("main", null, children),
      /*#__PURE__*/ React.createElement(Footer, {
        author: author,
      }),
      /*#__PURE__*/ React.createElement("script", {
        type: "module",
        src: "react.development.js",
      }),
      /*#__PURE__*/ React.createElement("script", {
        type: "module",
        src: "react-dom.development.js",
      }),
      /*#__PURE__*/ React.createElement("script", {
        type: "module",
        src: "client.js",
      }),
      /*#__PURE__*/ React.createElement("script", {
        type: "module",
        src: "client/index.js",
      })
    )
  );
}

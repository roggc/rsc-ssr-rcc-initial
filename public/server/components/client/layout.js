import React from "../../../react.development.js";
import Footer from "./footer.js";
import { useSlice } from "../../../client/slices.js";
import RSC from "./rsc.js";
export default function Layout({ children }) {
  // const [count, setCount] = React.useState(0);
  const author = "Jae Doe";
  const [count, setCount] = useSlice("count");
  const [JSX, setJSX] = React.useState(children);
  const fetchAndSetNewJSX = (componentName) => {
    if (componentName === "greeting") {
      setJSX(
        /*#__PURE__*/ React.createElement(RSC, {
          componentName: componentName,
          name: "Roger",
        })
      );
    } else {
      setJSX(
        /*#__PURE__*/ React.createElement(RSC, {
          componentName: componentName,
        })
      );
    }
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
            onClick: () => fetchAndSetNewJSX("home"),
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
            onClick: () => fetchAndSetNewJSX("greeting"),
          },
          "go"
        ),
        /*#__PURE__*/ React.createElement("hr", null)
      ),
      /*#__PURE__*/ React.createElement("main", null, JSX),
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

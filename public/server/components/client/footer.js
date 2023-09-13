import React from "../../../react.development.js";
export default function Footer({ author }) {
  return /*#__PURE__*/ React.createElement(
    "footer",
    null,
    /*#__PURE__*/ React.createElement("hr", null),
    /*#__PURE__*/ React.createElement(
      "p",
      null,
      /*#__PURE__*/ React.createElement(
        "i",
        null,
        "(c) ",
        author,
        " ",
        new Date().getFullYear()
      )
    )
  );
}

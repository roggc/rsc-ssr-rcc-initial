import React from "../../../react.development.js";
import { useSlice } from "../../../client/slices.js";
export default function Email({ email }) {
  const [func] = useSlice("function");
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    "Your email is ",
    email,
    ".",
    /*#__PURE__*/ React.createElement(
      "button",
      {
        onClick: func,
      },
      "do it"
    )
  );
}

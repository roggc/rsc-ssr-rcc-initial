import React from '../../../../node_modules/react/index.js';
import { useSlice } from '../../../client/slices.js';

function Email({
  email
}) {
  const [func] = useSlice("function");
  return /*#__PURE__*/React.createElement("div", null, "Your email is ", email, ".", /*#__PURE__*/React.createElement("button", {
    onClick: func
  }, "do it"));
}

export { Email as default };

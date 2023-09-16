import React from '../../../../node_modules/react/index.js';

function Footer({
  author
}) {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "(c) ", author, " ", new Date().getFullYear())));
}

export { Footer as default };

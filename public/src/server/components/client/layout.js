import React from '../../../../node_modules/react/index.js';
import Footer from './footer.js';
import { useSlice } from '../../../client/slices.js';
import RSC from './rsc.js';

function Layout({
  children
}) {
  const author = "Jae Doe";
  const [count, setCount] = useSlice("count");
  const [JSX, setJSX] = React.useState(children);
  const loadingJSX = /*#__PURE__*/React.createElement(React.Fragment, null, "loading ...");
  return /*#__PURE__*/React.createElement("html", null, /*#__PURE__*/React.createElement("head", null, /*#__PURE__*/React.createElement("title", null, "My blog")), /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setJSX( /*#__PURE__*/React.createElement(RSC, {
      componentName: "home"
    }, loadingJSX))
  }, "Home"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("input", null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(c => c + 1)
  }, "+"), count, /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    onClick: () => setJSX( /*#__PURE__*/React.createElement(RSC, {
      componentName: "greeting",
      name: "Roger"
    }, loadingJSX))
  }, "go"), /*#__PURE__*/React.createElement("hr", null)), /*#__PURE__*/React.createElement("main", null, JSX), /*#__PURE__*/React.createElement(Footer, {
    author: author
  }), /*#__PURE__*/React.createElement("script", {
    type: "module",
    src: "src/client/index.js"
  })));
}

export { Layout as default };

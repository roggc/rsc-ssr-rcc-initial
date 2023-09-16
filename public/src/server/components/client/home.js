import React from '../../../../node_modules/react/index.js';
import RSC from './rsc.js';
import { useSlice } from '../../../client/slices.js';

function Home({
  name
}) {
  const [, setFunction] = useSlice("function");
  React.useEffect(() => {
    setFunction(() => () => {
      console.log("hello");
    });
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Wellcome ", name), /*#__PURE__*/React.createElement(RSC, {
    componentName: "age",
    name: name
  }, "loading age ..."), /*#__PURE__*/React.createElement(RSC, {
    componentName: "email",
    name: name
  }, "loading email ..."));
}

export { Home as default };

import React from '../../../../node_modules/react/index.js';

function Greeting({
  greeting,
  name
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, `${greeting} ${name}`);
}

export { Greeting as default };

import React from "../../../react.development.js";
import { fillJSXwithClientComponents, parseJSX } from "../../../utils/index.js";
export default function RSC({ componentName, ...props }) {
  const [JSX, setJSX] = React.useState(
    /*#__PURE__*/ React.createElement(React.Fragment, null, "loading...")
  );
  const stringifyedProps = JSON.stringify(props ?? {});
  React.useEffect(() => {
    fetch(`/${componentName}?props=${stringifyedProps}`).then(
      async (response) => {
        const clientJSXString = await response.text();
        const clientJSX = JSON.parse(clientJSXString, parseJSX);
        const fixedClientJSX = await fillJSXwithClientComponents(clientJSX);
        setJSX(fixedClientJSX);
      }
    );
  }, [componentName, stringifyedProps]);
  return JSX;
}

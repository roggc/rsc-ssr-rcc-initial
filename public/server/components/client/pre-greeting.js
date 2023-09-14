import React from "../../../react.development.js";
import { fillJSXwithClientComponents, parseJSX } from "../../../utils/index.js";
export default function PreGreeting(props) {
  const [JSX, setJSX] = React.useState(
    /*#__PURE__*/ React.createElement(React.Fragment, null, "loading...")
  );
  React.useEffect(() => {
    fetch(`/greeting?jsx`).then(async (response) => {
      const clientJSXString = await response.text();
      const clientJSX = JSON.parse(clientJSXString, parseJSX);
      const fixedClientJSX = await fillJSXwithClientComponents(clientJSX);
      setJSX(fixedClientJSX);
    });
  }, [props]);
  return JSX;
}

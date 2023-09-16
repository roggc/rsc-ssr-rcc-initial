import React from '../../../../node_modules/react/index.js';
import { fillJSXwithClientComponents } from '../../../client/utils/fill-jsx-with-client-components.js';
import { parseJSX } from '../../../client/utils/parse-jsx.js';

function RSC({
  componentName,
  children,
  ...props
}) {
  const [JSX, setJSX] = React.useState(children);
  const stringifyedProps = JSON.stringify(props ?? {});
  React.useEffect(() => {
    setJSX(children);
    fetch(`/${componentName}?props=${stringifyedProps}`).then(async response => {
      const clientJSXString = await response.text();
      const clientJSX = JSON.parse(clientJSXString, parseJSX);
      const fixedClientJSX = await fillJSXwithClientComponents(clientJSX);
      setJSX(fixedClientJSX);
    });
  }, [componentName, stringifyedProps]);
  return JSX;
}

export { RSC as default };

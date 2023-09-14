import React from "react";
import { fillJSXwithClientComponents, parseJSX } from "../../../utils/index.js";

export default function PreGreeting(props) {
  const [JSX, setJSX] = React.useState(<>loading...</>);
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

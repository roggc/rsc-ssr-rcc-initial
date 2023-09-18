import { fillJSXwithClientComponents, parseJSX } from "./utils/index.js";
import { hydrateRoot } from "react-dom/client";

hydrateRoot(document, await getInitialClientJSX());

async function getInitialClientJSX() {
  const clientJSX = JSON.parse(
    JSON.stringify(window.__INITIAL_CLIENT_JSX_STRING__),
    parseJSX
  );
  const fixedJSX = await fillJSXwithClientComponents(clientJSX);
  return fixedJSX;
}

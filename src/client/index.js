import { fillJSXwithClientComponents, parseJSX } from "./utils/index.js";
import { hydrateRoot } from "react-dom/client";

const root = hydrateRoot(document, await getInitialClientJSX());

async function getInitialClientJSX() {
  const clientJSX = JSON.parse(
    JSON.stringify(window.__INITIAL_CLIENT_JSX_STRING__),
    parseJSX
  );
  return await fillJSXwithClientComponents(clientJSX);
}

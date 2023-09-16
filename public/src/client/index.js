import { fillJSXwithClientComponents } from './utils/fill-jsx-with-client-components.js';
import { parseJSX } from './utils/parse-jsx.js';
import { hydrateRoot } from '../../node_modules/react-dom/client.js';

hydrateRoot(document, await getInitialClientJSX());
async function getInitialClientJSX() {
  const clientJSX = JSON.parse(JSON.stringify(window.__INITIAL_CLIENT_JSX_STRING__), parseJSX);
  return await fillJSXwithClientComponents(clientJSX);
}

let currentPathname = window.location.pathname;

import { fillJSXwithClientComponents, parseJSX } from "../utils/index.js";
import { hydrateRoot } from "../client.js";

const root = hydrateRoot(document, await getInitialClientJSX());

async function getInitialClientJSX() {
  const clientJSX = JSON.parse(
    JSON.stringify(window.__INITIAL_CLIENT_JSX_STRING__),
    parseJSX
  );
  return await fillJSXwithClientComponents(clientJSX);
}

async function fetchClientJSX(pathname) {
  const response = await fetch(pathname + "?jsx");
  const clientJSXString = await response.text();
  const clientJSX = JSON.parse(clientJSXString, parseJSX);
  return await fillJSXwithClientComponents(clientJSX);
}

async function navigate(pathname) {
  currentPathname = pathname;
  const clientJSX = await fetchClientJSX(pathname);
  if (pathname === currentPathname) {
    root.render(clientJSX);
  }
}

window.addEventListener(
  "click",
  (e) => {
    // Only listen to link clicks.
    if (e.target.tagName !== "A") {
      return;
    }
    // Ignore "open in a new tab".
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    // Ignore external URLs.
    const href = e.target.getAttribute("href");
    if (!href.startsWith("/")) {
      return;
    }
    // Prevent the browser from reloading the page but update the URL.
    e.preventDefault();
    window.history.pushState(null, null, href);
    // Call our custom logic.
    navigate(href);
  },
  true
);

window.addEventListener("popstate", () => {
  // When the user presses Back/Forward, call our custom logic too.
  navigate(window.location.pathname);
});

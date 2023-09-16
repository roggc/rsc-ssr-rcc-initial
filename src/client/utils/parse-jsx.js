export function parseJSX(key, value) {
  if (value === "$RE") {
    // This is our special marker we added on the server.
    // Restore the Symbol to tell React that this is valid JSX.
    return Symbol.for("react.element");
  } else if (value === "$RF") {
    return Symbol.for("react.fragment");
  } else if (typeof value === "string" && value.startsWith("$$")) {
    // This is a string starting with $. Remove the extra $ added by the server.
    return value.slice(1);
  } else {
    return value;
  }
}

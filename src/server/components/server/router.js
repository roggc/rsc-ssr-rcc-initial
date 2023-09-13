import React from "react";
import Home from "./home.js";
import Greeting from "./greeting.js";
import Layout from "../client/layout.js";

export default async function Router({ url }) {
  let page;
  if (url.pathname === "/") {
    page = <Home />;
  } else {
    page = <Greeting />;
  }
  return (
    <Layout __isClient__="../server/components/client/layout.js">{page}</Layout>
  );
}

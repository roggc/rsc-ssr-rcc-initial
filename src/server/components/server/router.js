import React from "react";
import Home from "./home.js";
import GreetingRSC from "./greeting-rsc.js";
import Layout from "../client/layout.js";
import Provider from "../../../slices.js";

export default async function Router({ url }) {
  switch (url.pathname) {
    case "/":
      return (
        <Provider __isClient__="../client/slices.js">
          <Layout __isClient__="../server/components/client/layout.js">
            <Home />
          </Layout>
        </Provider>
      );
    case "/home":
      return <Home />;
    case "/greeting":
      return <GreetingRSC />;
    default:
      return <Home />;
  }
}

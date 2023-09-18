import React from "react";
import HomeRSC from "./home-rsc.js";
import GreetingRSC from "./greeting-rsc.js";
import AgeRSC from "./age-rsc.js";
import EmailRSC from "./email-rsc.js";
import RSC from "../client/rsc.js";
import Provider from "../../../client/slices.js";
import Layout from "../client/layout.js";

export default async function Router({ url }) {
  const props = JSON.parse(url.searchParams.get("props"));

  switch (url.pathname) {
    case "/":
      return (
        <Provider __isClient__="../slices.js">
          <Layout __isClient__="../../server/components/client/layout.js">
            <RSC
              __isClient__="../../server/components/client/rsc.js"
              componentName="home"
            >
              <>loading home page ...</>
            </RSC>
          </Layout>
        </Provider>
      );
    case "/home":
      return <HomeRSC {...props} />;
    case "/greeting":
      return <GreetingRSC {...props} />;
    case "/age":
      return <AgeRSC {...props} />;
    case "/email":
      return <EmailRSC {...props} />;
    default:
      return <HomeRSC {...props} />;
  }
}

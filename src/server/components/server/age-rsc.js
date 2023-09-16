import React from "react";
import Age from "../client/age.js";

export default async function AgeRSC({ name }) {
  const age = await new Promise((r) =>
    setTimeout(() => {
      switch (name) {
        case "Roger":
          return r(20);
        default:
          return r("unknwon");
      }
    }, 1000)
  );
  return <Age age={age} __isClient__="../../server/components/client/age.js" />;
}

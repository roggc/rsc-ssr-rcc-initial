import React from "react";
import Email from "../client/email.js";

export default async function EmailRSC({ name }) {
  const email = await new Promise((r) =>
    setTimeout(() => {
      switch (name) {
        case "Roger":
          return r("foo@bar.com");
        default:
          return r("unknown");
      }
    }, 3000)
  );
  return (
    <Email __isClient__="../server/components/client/email.js" email={email} />
  );
}

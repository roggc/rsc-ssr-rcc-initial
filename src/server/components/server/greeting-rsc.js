import React from "react";
import Greeting from "../client/greeting.js";

export default async function GreetingRSC(props) {
  const data = await new Promise((r) => setTimeout(() => r("hello"), 1000));

  return (
    <>
      <Greeting
        greeting={data}
        {...props}
        __isClient__="../../server/components/client/greeting.js"
      />
    </>
  );
}

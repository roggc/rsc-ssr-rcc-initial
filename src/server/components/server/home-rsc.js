import React from "react";
import Home from "../client/home.js";

export default async function HomeRSC() {
  const name = await new Promise((r) => setTimeout(() => r("Roger"), 3000));
  return (
    <Home __isClient__="../../server/components/client/home.js" name={name} />
  );
}

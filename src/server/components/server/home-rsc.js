import React from "react";
import Home from "../client/home.js";

export default async function HomeRSC() {
  // probably fetch some data
  return <Home __isClient__="../server/components/client/home.js" />;
}

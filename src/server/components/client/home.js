import React from "react";
import RSC from "./rsc.js";

export default function Home({ name }) {
  return (
    <>
      <h1>Wellcome {name}</h1>
      <RSC componentName="age" name={name}>
        loading age ...
      </RSC>
      <RSC componentName="email" name={name}>
        loading email ...
      </RSC>
    </>
  );
}

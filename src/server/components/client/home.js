import React from "react";
import RSC from "./rsc.js";
import { useSlice } from "../../../client/slices.js";

export default function Home({ name }) {
  const [, setFunction] = useSlice("function");
  React.useEffect(() => {
    setFunction(() => () => {
      console.log("hello");
    });
  }, []);
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

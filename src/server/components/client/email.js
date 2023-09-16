import React from "react";
import { useSlice } from "../../../client/slices.js";

export default function Email({ email }) {
  const [func] = useSlice("function");
  return (
    <div>
      Your email is {email}.<button onClick={func}>do it</button>
    </div>
  );
}

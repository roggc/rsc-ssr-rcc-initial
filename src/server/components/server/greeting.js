import React from "react";

export default async function Greeting({}) {
  const content = await new Promise((r) => setTimeout(() => r("hello"), 1000));

  return <>{content}</>;
}

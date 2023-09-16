import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";

export default {
  input: {
    "src/client/index": "src/client/index.js",
    "src/client/slices": "src/client/slices.js",
    "src/server/components/client/layout":
      "src/server/components/client/layout.js",
    "src/server/components/client/home": "src/server/components/client/home.js",
    "src/server/components/client/age": "src/server/components/client/age.js",
    "src/server/components/client/email":
      "src/server/components/client/email.js",
    "src/server/components/client/greeting":
      "src/server/components/client/greeting.js",
  },
  output: {
    dir: "public",
    format: "es",
    entryFileNames: "[name].js",
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    peerDepsExternal(),
    commonjs(),
    nodeResolve(),
    json(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
  preserveModules: true,
};

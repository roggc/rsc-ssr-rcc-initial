import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import { globby } from "globby";

export default [
  {
    input: (await globby("src/client/*.js"))
      .concat(await globby("src/server/components/client/*.js"))
      .reduce(
        (acc, entryFile) => ({
          ...acc,
          [entryFile.replace(".js", "")]: entryFile,
        }),
        {}
      ),
    output: {
      dir: "public",
      format: "esm",
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
  },
  {
    input: {
      rsc: "src/server/rsc.js",
      ssr: "src/server/ssr.js",
      components: "src/server/components/server/router.js",
    },
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins: [babel({ babelHelpers: "bundled" })],
    preserveModules: true,
  },
];

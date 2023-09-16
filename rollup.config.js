import { babel } from "@rollup/plugin-babel";

export default {
  input: {
    rsc: "src/server/rsc.js",
    ssr: "src/server/ssr.js",
    components: "src/server/components/server/router.js",
    client: "src/client/index.js",
  },
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [babel({ babelHelpers: "bundled" })],
  preserveModules: true,
};

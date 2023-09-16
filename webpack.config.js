// import path from "path";
// import { fileURLToPath } from "url";
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// import nodeExternals from "webpack-node-externals";

// export default {
//   mode: "development",
//   node: {
//     __dirname: false,
//   },
//   externalsPresets: {
//     node: true,
//   },
//   target: ["node", "es6"],
//   externals: [nodeExternals()],
//   entry: "./src/server/rsc.js",
//   output: {
//     path: path.resolve(__dirname, "./dist"),
//     filename: "rsc.js",
//   },
//   experiments: {
//     outputModule: true,
//   },
//   plugins: [
//     //empty pluggins array
//   ],
//   module: {
//     // https://webpack.js.org/loaders/babel-loader/#root
//     rules: [
//       {
//         test: /.m?js$/,
//         loader: "babel-loader",
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   devtool: "source-map",
// };

import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: "development",
  entry: "./src/index.js",
  externals: [nodeExternals()],
  output: {
    filename: "test.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "module",
    },
  },
  experiments: {
    outputModule: true,
  },
  module: {
    // https://webpack.js.org/loaders/babel-loader/#root
    rules: [
      {
        test: /.m?js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: false,
};

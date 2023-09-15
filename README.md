# RSC + SSR + RCC

This is an implementation from scratch of RSC (React Server Components) plus SSR (Server Side Rendering) plus RCC (React Client Components).

## Instructions to install an run the project.

First of all run **npm i** to install the node modules.

Next look in the node_modules folder for the package **react-context-slices** and put "type":"module" in its package.json.

Next go to the **dist** folder of this package an change the **index.js** to look like this in the beginning:

**import { configureStore, createSlice as createReduxSlice, } from "@reduxjs/toolkit";**

gets transformed into:

**import \* as pkg from "@reduxjs/toolkit";**
**const { configureStore, createSlice: createReduxSlice, } =pkg;**

Now we are done with this package and can run also on the server without error.

Next thing to do is to compile the project. For this run **npx babel ./src -d ./dist**. This will produce a dist folder with the compiled (transpiled) code.

Now run the servers (the RSC server (file rsc.js) and the SSR server (file ssr.js)). For this run the following commands, each one in its own terminal window:

**node dist/server/rsc.js** and **node dist/server/ssr.js**.

And we are done. Now go to the browser and load localhos:8080 to see the app in action. Have fun!

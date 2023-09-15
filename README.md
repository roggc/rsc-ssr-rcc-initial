# RSC + SSR + RCC

This is an implementation from scratch of RSC (React Server Components) plus SSR (Server Side Rendering) plus RCC (React Client Components).

## How to install and run the project.

First of all run **npm i** to install the node modules.

Next run **npx babel ./src -d ./dist** to transpile the project. This will produce a **dist** folder with the transpiled code.

Finally run next commands each in its own terminal window:

**node dist/server/rsc.js** and **node dist/server/ssr.js**.

And we are done. Now go to the browser and load **localhost:8080** to see the app in action. Have fun!

An article explaining the theory behind this project can be found at [here](https://medium.com/@roggc9/rsc-ssr-rcc-react-client-components-implementation-from-scratch-e96ba0d6e1b4).

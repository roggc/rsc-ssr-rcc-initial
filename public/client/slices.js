import getHookAndProvider from "../rcs.js";
const { useSlice, Provider } = getHookAndProvider({
  slices: {
    count: {
      initialArg: 0,
    },
  },
});
export { useSlice };
export default Provider;

import getHookAndProvider from "../rcs.js";
const { useSlice, Provider } = getHookAndProvider({
  slices: {
    count: {
      initialArg: 0,
    },
    function: {
      initialArg: null,
    },
  },
});
export { useSlice };
export default Provider;

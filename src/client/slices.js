import getHookAndProvider from "react-context-slices";

const { useSlice, Provider } = getHookAndProvider({
  slices: {
    count: { initialArg: 0 },
  },
});

export { useSlice };

export default Provider;

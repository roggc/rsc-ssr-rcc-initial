import getHookAndProvider from "react-context-slices";

export const { useSlice, Provider } = getHookAndProvider({
  slices: {
    root: { initialArg: null },
  },
});

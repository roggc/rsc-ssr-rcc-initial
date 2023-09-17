import getHookAndProvider from "react-context-slices";

const { useSlice, Provider } = getHookAndProvider({
  slices: {
    count: { initialArg: 0 },
    function: { initialArg: null },
    count2: { initialState: 0, reducers: { increment: (state) => state + 1 } },
  },
});

export { useSlice };

export default Provider;

import getHookAndProviderFromSlices from '../../node_modules/react-context-slices/dist/index.js';

const {
  useSlice,
  Provider
} = getHookAndProviderFromSlices({
  slices: {
    count: {
      initialArg: 0
    },
    function: {
      initialArg: null
    }
  }
});

export { Provider as default, useSlice };

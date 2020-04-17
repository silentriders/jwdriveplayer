import { createGlobalState } from 'react-hooks-global-state';
export const { GlobalStateProvider, useGlobalState } = createGlobalState({
  fileSubtitles: [],
  token: null
});

import { compose, withHandlers } from 'recompose';
import { withLoading, withMenuBar, withSteps } from '..';

const Enhancer = (opts = {}) => WrappedComponent => {
  const {
    handler: handlersOpts,
    isShowMenubar,
    menuBarList,
    defaultMenu,
    isShowSteps,
    menuStepsList,
    defaultMenuSteps,
    currentSteps
  } = opts;

  return compose(
    withLoading,
    withMenuBar(isShowMenubar, menuBarList, defaultMenu),
    withHandlers(handlersOpts),
    withSteps(isShowSteps, menuStepsList, defaultMenuSteps, currentSteps)
  )(WrappedComponent);
};

export default Enhancer;

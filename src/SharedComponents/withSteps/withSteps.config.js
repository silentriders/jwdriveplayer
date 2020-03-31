import PropTypes from 'prop-types';

const propTypes = {
  isShowSteps: PropTypes.bool.isRequired,
  menuStepsList: PropTypes.array.isRequired,
  defaultStepsMenu: PropTypes.string.isRequired
};

const defaultProps = {

};

export default {
  propTypes,
  defaultProps
}

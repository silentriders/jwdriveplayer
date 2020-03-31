import React, { Component } from 'react';
import _ from 'lodash';

import { StepsVendor, CenterLayout } from '../../Components';
import { Content, Container } from './withSteps.style';
import config from './withSteps.config';

const withSteps = (
  isShowSteps,
  menuStepsList,
  defaultMenuSteps
) => WrappedComponent =>
  class extends Component {
    state = {
      menuStepsActive: defaultMenuSteps,
      currentSteps: -1
    };

    _setMenuStepsActive = menuStepsActive => {
      this.setState({
        menuStepsActive
      });
    };

    _setCurrentSteps = currentSteps => {
      this.setState({
        currentSteps
      });
    };

    _setMenuAndCurrentSteps = (menuStepsActive, currentSteps) => {
      this.setState({
        menuStepsActive,
        currentSteps
      });
    };

    _renderMenuSteps = () => {
      return isShowSteps ? (
        <CenterLayout>
          <StepsVendor
            menuStepsList={menuStepsList}
            menuStepsActive={this.state.menuStepsActive}
            setMenuStepsActive={this._setMenuStepsActive}
            currentSteps={this.state.currentSteps}
            setCurrentSteps={this._setCurrentSteps}
          />
        </CenterLayout>
      ) : null;
    };

    render() {
      const list = _.find(menuStepsList, ['name', this.state.menuStepsActive]);
      return (
        <>
          {this._renderMenuSteps()}
          {isShowSteps ? (
            <Content>
              <Container>
                <CenterLayout>
                  {list.renderComponent({
                    ...this.props,
                    setCurrentSteps: this._setCurrentSteps,
                    currentSteps: this.state.currentSteps,
                    setMenuAndCurrentSteps: this._setMenuAndCurrentSteps
                  })}
                  <WrappedComponent {...this.props} />
                </CenterLayout>
              </Container>
            </Content>
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </>
      );
    }
  };

withSteps.propTypes = config.propTypes;
withSteps.defaultProps = config.propTypes;

export default withSteps;

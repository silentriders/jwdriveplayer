import React, { Component } from 'react';

import config from './withLoading.config';
import { Spin } from 'antd';

const withLoading = WrappedComponent =>
  class extends Component {
    state = {
      isShowLoading: false
    };

    setLoading = isShowLoading => {
      this.setState({
        isShowLoading
      });
    };

    render() {
      return (
        <Spin tip="Loading..." spinning={this.state.isShowLoading}>
          <WrappedComponent setLoading={this.setLoading} {...this.props} />
        </Spin>
      );
    }
  };

withLoading.propTypes = config.propTypes;
withLoading.defaultProps = config.propTypes;

export default withLoading;

import React, {Component} from "react";
import {Query, Mutation} from 'react-apollo';
import {Redirect} from "react-router-dom";
import {Spin} from "antd";

const withGraphql = parameters => WrappedComponent => class extends Component {
  state = {
    createSuccess: false,
  };

  handleComplete = async () => {
    await this.setState({ createSuccess: true });
  };

  render() {
    const {
      queryGQL,
      mutationGQL,
      variables,
      completePath
    } = parameters;
    const {
      createSuccess
    } = this.state;

    if (createSuccess) {
      return <Redirect to={completePath}/>;
    }

    return (
      <Query
        query={queryGQL}
        variables={variables}>
        {(data, loading) => (
          <Mutation
            mutation={mutationGQL}
            onCompleted={this.handleComplete}>
            {(mutation, { loading: mutationLoading}) => (
              <Spin tip="Loading..." spinning={loading  || mutationLoading}>
                <WrappedComponent
                  {...this.props}
                  data={data}
                  mutation={mutation}
                />
              </Spin>
            )}
          </Mutation>
        )}
      </Query>
    )
  }
};

export default withGraphql;

import React from 'react';
import { Layout } from 'antd';
import Assets from '../../Assets';
const { Content } = Layout;

const LayoutComponent = props => {
  const { children } = props;
  return (
    <Layout>
      <div>
        <img src={Assets.logo} alt="LOGO" />
      </div>
      <Content>{children}</Content>
    </Layout>
  );
};

export default LayoutComponent;

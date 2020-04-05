import React from 'react';
import { Layout } from 'antd';
import { WrapperLayout } from './Layout.style';
import { Navbar } from '..';
const { Content, Header } = Layout;


const LayoutComponent = props => {
  const { children } = props;
  return (
    <WrapperLayout>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>{children}</Content>
      </Layout>
    </WrapperLayout>
  );
};

export default LayoutComponent;

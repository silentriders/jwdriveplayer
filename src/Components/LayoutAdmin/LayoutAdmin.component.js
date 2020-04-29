import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { WrapperLayoutAdmin } from './LayoutAdmin.style';
import { NavbarDashboard } from '..';
import Cookies from '../../Utils/Cookies';

const { Header, Content, Sider, Footer } = Layout;

const LayoutAdminComponent = props => {
  const userCookies = Cookies.get('user');

  useEffect(() => {
    if (userCookies === null) {
      props.history.push('/dashboard/login');
    }
  }, [props.history, userCookies]);

  return (
    <WrapperLayoutAdmin>
      <Layout style={{ minHeight: '665px' }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={null}
          onCollapse={null}
        >
          <NavbarDashboard {...props} />
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </WrapperLayoutAdmin>
  );
};

export default LayoutAdminComponent;

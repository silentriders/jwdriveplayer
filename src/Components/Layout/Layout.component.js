import React from 'react';
import firebase from 'firebase'
import { Layout } from 'antd';
import { WrapperLayout } from './Layout.style';
import { Navbar } from '..';
const { Content, Header, Footer } = Layout;

const configFirebase = {
  apiKey: "AIzaSyDe_YnZOFaGAct--8tVuGW9u4ax15C96p4",
  authDomain: "akehdrakor.firebaseapp.com",
  databaseURL: "https://akehdrakor.firebaseio.com",
  projectId: "akehdrakor",
  storageBucket: "akehdrakor.appspot.com",
  messagingSenderId: "823041786018",
  appId: "1:823041786018:web:85df7be08433df995417fb"
};
firebase.initializeApp(configFirebase);

const LayoutComponent = props => {
  const { children } = props;
  return (
    <WrapperLayout>
     <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
     <Navbar />
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>JWDRIVEPLAYER FREE LOVE YOU</Footer>
  </Layout>
    </WrapperLayout>
  );
};

export default LayoutComponent;

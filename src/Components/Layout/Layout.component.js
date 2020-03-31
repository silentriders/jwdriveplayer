import React from 'react';
import { Layout } from 'antd';

const LayoutComponent = (props) => {
    const { children } = props;
    console.log(props)
    return (
        <Layout>
           <Layout.Content>
               {children}
           </Layout.Content>
        </Layout>
    );
};

export default LayoutComponent;
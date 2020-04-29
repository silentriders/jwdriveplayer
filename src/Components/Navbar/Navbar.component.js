import React from 'react';
import { WrapperNavbar } from './Navbar.style';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const NavbarComponent = () => {
  return (
    <WrapperNavbar>
     <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/dashboard">Dashboard</Link></Menu.Item>
        <Menu.Item key="3"><a href="https://web.facebook.com/groups/171339150759167/" rel="noopener noreferrer" target="_blank">Join group facebook</a></Menu.Item>
      </Menu>
    </WrapperNavbar>
  );
};

export default NavbarComponent;

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
      </Menu>
    </WrapperNavbar>
  );
};

export default NavbarComponent;

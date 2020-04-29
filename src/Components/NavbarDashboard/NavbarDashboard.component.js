import React from 'react';
import { Menu } from 'antd';
import { WrapperNavbarDashboard } from './NavbarDashboard.style';
import { Link } from 'react-router-dom';
import Cookies from '../../Utils/Cookies';

const NavbarDashboardComponent = props => {
  const deleteUserCookies = () => {
    Cookies.erase('user')
    props.history.push('/dashboard/login')
  }
  return (
    <WrapperNavbarDashboard>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/dashboard/movies">List Movies</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/dashboard/movies/add">Add New Movie</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <a onClick={() => deleteUserCookies()}>Logout</a>
        </Menu.Item>
      </Menu>
    </WrapperNavbarDashboard>
  );
};

export default NavbarDashboardComponent;

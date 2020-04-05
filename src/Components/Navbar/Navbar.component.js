import React from 'react';
import Assets from '../../Assets';
import { WrapperNavbar, Logo, MenuList } from './Navbar.style';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <WrapperNavbar>
      <Logo>
        <img src={Assets.logo} alt="LOGO" />
      </Logo>
      <MenuList>
        <ul>
          <Link to="/home">
            <li className="active">Home</li>
          </Link>
          <Link to="/movies">
            <li>Movies</li>
          </Link>
          <Link to="/series">
            <li>Series</li>
          </Link>
          <Link to="/mylist">
            <li>My List</li>
          </Link>
        </ul>
      </MenuList>
    </WrapperNavbar>
  );
};

export default NavbarComponent;

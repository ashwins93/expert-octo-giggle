import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

const NavBarTop = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">
      <img src={logo} alt="" />
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Link className="nav-link" to="/sales/new">
          <Button color="primary" size="sm">
            New Order
          </Button>
        </Link>
      </NavItem>
    </Nav>
  </Navbar>
);

export default NavBarTop;

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
          New Order
        </Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/orders">
          Orders
        </Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/projections/new">
          New Projection
        </Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/projections">
          Projections
        </Link>
      </NavItem>
    </Nav>
  </Navbar>
);

export default NavBarTop;

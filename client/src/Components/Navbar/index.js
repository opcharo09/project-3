import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

export default class navbar extends React.Component {
  


  
  
  render() {
    return (
      <div>
        <Navbar className="title">
          <NavbarBrand  href="/">Photo Hub</NavbarBrand>
          
          
            <Nav >
              <NavItem>
                <NavLink href="./">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./">Sign in</NavLink>
              </NavItem>
              
            </Nav>
          
        </Navbar>
      </div>
    );
  }
}
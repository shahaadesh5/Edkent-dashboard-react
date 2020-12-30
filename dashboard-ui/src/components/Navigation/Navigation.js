import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <div>
      <Navbar fixed="top">
        <Navbar.Brand href="#" className="text-center">
          <span className="primary-color">
            Logo Here
          </span>
        </Navbar.Brand>
            <Nav className="mr-auto">

            </Nav>
            <div className="justify-content-end">
              <NavDropdown title={
                <div className="navbar-user" style={{display:"inline-block"}}>
                    <div>
                      <img src="../images/avatar.png" alt="Avatar" />  
                    </div>
                    <div>
                      <p className="username">Anthony Johnson</p>
                      <p className="user-email">Dummy Design.com</p>
                    </div>
                </div>}>
                <div>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </div> 
              </NavDropdown>
              </div>
      </Navbar>
    </div>
  );
}

export default Navigation;

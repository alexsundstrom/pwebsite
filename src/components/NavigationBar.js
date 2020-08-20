import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const NavbarStylesWrapper = styled.div`

  .navbar {
    background-color: #222;
  }
  .narbar-brand, .narbar-nav .nav-link {
    color: #bbb;
    &:hover{
      color:white;
    }
  }

`;

const NavigationBar = () => {
    return (
      <NavbarStylesWrapper>
        <Navbar className="border-bottom" bg="transparent" expand="md">
          <Navbar.Brand href="/">Alexander Sundström</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href="/contact">Content</Nav.Link></Nav.Item>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavbarStylesWrapper>

    )
}

export default NavigationBar;

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const RileyNavbar = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Riley Wofford</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/styling">Food Styling</Nav.Link>
            <Nav.Link href="/development">Recipe Development</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default RileyNavbar;
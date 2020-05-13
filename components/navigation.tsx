import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation: React.FC = () => {
  return (
    <div>
      <Navbar id="navbarContainer" expand="lg" fixed="top">
        <Navbar.Brand id="navbarBrand" href="#home">
          Mohan Vashist
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav navbar-nav ml-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

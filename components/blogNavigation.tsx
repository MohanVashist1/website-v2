import React from "react";
import { Navbar } from "react-bootstrap";

const BlogNavigation: React.FC = () => {
  return (
    <div>
      <Navbar id="navbarContainer" expand="lg" fixed="top">
        <Navbar.Brand id="navbarBrand" href="/">
          Mohan Vashist
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default BlogNavigation;

import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Header.css";

const Header = (props) => {
  return (
    <Navbar className="header-container">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

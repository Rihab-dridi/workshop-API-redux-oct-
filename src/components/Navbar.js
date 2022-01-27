import React from "react";
import {Navbar ,Nav,Container } from "react-bootstrap";
export default function Navbarfct() {
  return (
    <div>
      <Navbar className="navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ciné </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
            <Nav.Link href="#pricing">Series</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

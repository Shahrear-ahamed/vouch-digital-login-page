import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const NavbarTop = () => {
  return (
    <Navbar className="shadow-sm py-3" expand="lg">
      <Container>
        <div className="full-width-navbar d-flex justify-content-between">
          <Navbar.Brand href="#home">ATools</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <div className="my-2 my-lg-0">
          <Navbar.Collapse id="basic-navbar-nav">
            <Button variant="dark">Start Free Trial</Button>
            <Button variant="warning" className="ms-3 text-white">
              Sign Up
            </Button>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;

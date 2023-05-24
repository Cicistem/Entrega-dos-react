import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Tienda Cecilia</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Productos</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Zapatillas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Botas
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Zapatos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Borcegos
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CartWidget/>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar
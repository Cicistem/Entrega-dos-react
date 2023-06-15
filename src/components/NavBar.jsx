import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "../components/NavBars.css";


const NavBar = () => {
  return (
    <navbar class="navbar-deco">
          <Navbar  bg="light" expand="xl"  >
           <Container>
           <Navbar.Brand href="/">Mi Bazar</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="me-auto" >
               <Nav.Link href="#home">
                 <Link to="/">Inicio</Link>
               </Nav.Link>
               <NavDropdown title="Categorias" id="basic-nav-dropdown">
                 <NavDropdown.Item>
                   <Link to="/category/decohogar">DecoHogar</Link>
                 </NavDropdown.Item>
                 <NavDropdown.Item>
                   <Link to="/category/cocina">Cocina</Link>
                 </NavDropdown.Item>
                 <NavDropdown.Item>
                   <Link to="/category/cuidadopersonal">Cuidado Personal</Link>
                 </NavDropdown.Item>
               </NavDropdown>
             </Nav>
             <CartWidget />
           </Navbar.Collapse>
         </Container>
   
       </Navbar>
    </navbar> 

  );
};

export default NavBar;

import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineShoppingCart } from "react-icons/ai";
export const Nab = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">LAMAS</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Products</Nav.Link>
            <Nav.Link href="#pricing"><AiOutlineShoppingCart/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


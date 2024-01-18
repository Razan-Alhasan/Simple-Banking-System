import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
function Mynav() {
  return (
    <Navbar expand="lg" className='mynav'>
      <Container>
        <Navbar.Brand href="/home" className='mynav'>R-Sparks Bank</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/home" className='mynav'>Home</Nav.Link>
            <Nav.Link href="/allCustomers" className='mynav'>Customers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynav;
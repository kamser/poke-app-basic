import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const CustomNavbar = () => {
  return (
    <div className="App">
         <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand>Poke-api</Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  );
}

export default CustomNavbar;
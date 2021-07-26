import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar() {

    return (
        <Navbar className='h-10' bg='warning' expand='md'>
            <Container>
            <Navbar.Brand as={Link} to='/'>My New Best Friend</Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/pets'>Pets</Nav.Link>
                        <Nav.Link as={Link} to='/pets/new'>New</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}

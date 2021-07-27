import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Row, Nav } from 'react-bootstrap';

export default function NavBar() {

    return (
        <Navbar as='div' bg='warning' expand='md'>
            <Container>
            <Navbar.Brand as={Link} to='/'>My New Best Friend</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' >
                <Nav className='ml-auto'>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/pets'>Pets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to='/pets/new'>New</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

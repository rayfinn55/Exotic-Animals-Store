import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'


export default function NavBar() {

    return (
        <Navbar>
            <Container>
                <Nav>
                    
                        <Link to='/'>Home</Link>
                        <Link to='/pets'>Pets</Link>
                        <Link to='/pets/new'>New</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

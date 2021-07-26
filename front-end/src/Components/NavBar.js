import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Home from '../Pages/Home'


export default function NavBar() {

    return (
        <Navbar bg='light' expand='md'>
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

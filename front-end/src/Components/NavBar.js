import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {

    return (
        <nav className='navbar navbar-light bg-light'>
            <Link to='/'>Home</Link>
            <Link to='/pets'>Pets</Link>
            <Link to='/pets/new'>New</Link>
        </nav>
    )
}

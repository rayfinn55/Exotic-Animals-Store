import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {

    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/pets'>Pets</Link>
            <Link to='/pets/new'>New</Link>
        </div>
    )
}

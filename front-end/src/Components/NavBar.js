import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {

    return (
        <nav className='navbar'>
            <div className='row'>
                <div className='col-2'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='col-2'>
                    <Link to='/pets'>Pets</Link>
                </div>
                <div className='col-2'>
                    <Link to='/pets/new'>New</Link>
                </div>
            </div>
        </nav>
    )
}

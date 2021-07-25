import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Animal({ pet }) {

    
    return (
        <li className='mb-5 media'>
            {pet.img ? <img className='align-self-center mr-3' src={pet.img} alt={`A cool ${pet.animal_name}`} /> : null}

            <div className='media-body'>
                <h3>{pet.animal_name}</h3>
                <p>{pet.class}</p>
                <p>Location: {pet.location}</p>
                <p>Cost: {pet.price}</p>
                {pet.stock ? <p>In Stock</p> : <p>Out of stock</p>}
                <Link to={`/pets/${pet.id}`}>
                    <button>View Animal</button>
                </Link>
            </div>
        </li>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'


export default function Animal({ pet }) {


    return (
        <li>
            <p>{pet.animal_name}</p>
            <p>{pet.class}</p>
            <img src={pet.img} alt={`A cool ${pet.animal_name}`} />
            <p>Location: {pet.location}</p>
            <p>Cost: {pet.price}</p>
            {pet.stock ? <p>In Stock</p> : <p>Out of stock</p>}
            <Link to={`/pets/${pet.id}`}>
                <button>View Animal</button>
            </Link>
        </li>
    )
}

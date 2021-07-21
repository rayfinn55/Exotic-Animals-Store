import React from 'react'
import { Link } from 'react-router-dom'


export default function Animal({ pet, id }) {


    return (
        <li>
            <p>{pet.name}</p>
            <img src={pet.img} alt={`A cool ${pet.name}`} />
            <Link to={`/pets/${id}`}>
                <button>View Animal</button>
            </Link>
        </li>
    )
}

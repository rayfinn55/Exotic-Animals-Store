import React from 'react'


export default function Item({ pet }) {


    return (
        <li>
            <p>{pet.name}</p>
            <img src={pet.img} alt={`A cool ${pet.name}`} />
        </li>
    )
}

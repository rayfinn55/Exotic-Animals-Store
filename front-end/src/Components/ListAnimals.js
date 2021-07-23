import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../util/apiURL'

import Animal from './Animal'
// import Search from './Search'

<<<<<<< HEAD:front-end/src/Components/ListItems.js
export default function ListItems() {
=======

export default function ListAnimals() {
>>>>>>> dacef4e386f0dbfb6a7af27bf1dcf72850bfe375:front-end/src/Components/ListAnimals.js

    const [pets, setPets] = useState([])
    // const [amount, setAmount] = useState(10)  // Uncomment to use search bar (or maybe pagination?)
    // const [submit, setSubmit] = useState(false)
    const API = apiURL()

    useEffect(() => {
        axios.get(`${API}/animals`)
        .then(
            (response) => {
                setPets(response.data)
            },
            (error) => console.log(`Error: `, error)
        ).catch((c) => console.warn(c))
    }, [API])

    // const handleChange = (e) => {
    //     const {value} = e.target
    //     setAmount(value)
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setSubmit(true)
    //     e.target.value = 0
    // }
    
    const petList = pets.map((pet, i) => {
        // if (i < amount) {  // uncomment to use searchbar
            return <Animal key={pet.id} pet={pet} />
        // }
        // else {
        //     return null
        // }
    })

    return (
        <div>
            <h2>List of all Items</h2>
            {/* <Search amount={amount} handleChange={handleChange} handleSubmit={handleSubmit} /> */}
            {/* { submit ? */}
                <ul>
                    {pets[0] ? petList : null}
                </ul> 
            {/* null } */}
        </div>
    )
}

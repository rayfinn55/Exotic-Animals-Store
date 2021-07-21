import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../util/apiURL.js'


export default function AnimalDetails() {

    const [animal, setAnimal] = useState({})
    const API = apiURL()
    console.log(API)

    useEffect(() => {
        axios.get(`${API}/animals`)//${id}
        .then(response => console.log(response.data))
    })
    // Needs Show Route, need to pull from main first

    return (
        <div>
            <h2>AnimalDetails Component</h2>
        </div>
    )
}

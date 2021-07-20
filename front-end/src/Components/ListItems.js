import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../util/apiURL'


export default function ListItems() {

    const [pets, setPets] = useState([])
    const API = apiURL()

    useEffect(() => {
        axios.get(`${API}`)
        .then(response => setPets(response.data))
    }, [API])
    console.log(pets)

    return (
        <div>
            <h2>List of all Items</h2>
            <img src={pets[7].img} alt={`Cool pet called ${pets[7].name}`} />
        </div>
    )
}

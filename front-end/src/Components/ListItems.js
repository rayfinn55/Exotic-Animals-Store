import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../util/apiURL'

import Item from './Item'
import Search from './Search'


export default function ListItems() {

    const [pets, setPets] = useState([])
    const [amount, setAmount] = useState(10)
    const [submit, setSubmit] = useState(false)
    const API = apiURL()

    useEffect(() => {
        axios.get(`${API}`)
        .then(
            (response) => {
                setPets(response.data)
            },
            (error) => console.log(`Error: `, error)
        ).catch((c) => console.warn(c))
    }, [API])

    const handleChange = (e) => {
        const {value} = e.target
        setAmount(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(true)
    }
    
    const petList = pets.map((pet, i) => {
        if (i < amount) {
            return <Item key={pet.name} pet={pet} />
        }
    })

    return (
        <div>
            <h2>List of all Items</h2>
            <Search amount={amount} handleChange={handleChange} handleSubmit={handleSubmit} />
            { submit ?
            <ul> {/* This is returning the individual <Item/> component */}
                {pets[0] ? petList : null}
            </ul> :
            null
            }
        </div>
    )
}

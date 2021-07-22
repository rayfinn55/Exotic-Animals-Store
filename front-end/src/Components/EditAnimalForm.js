import React, { useState } from 'react'
import axios from 'axios'
import { apiURL } from '../util/apiURL.js'


export default function EditAnimalForm() {

    const [animal, setAnimal] = useState({
        animal_name: "",
        class: "",
        description: "",
        location: "",
        price: "",
        stock: true
    })
    const API = apiURL()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${API}/animals/3`, animal)
            .then(() => {},
                () => {}
            ).catch(e => {
                console.log(e)
                return e
            })
        } catch {
            console.log()
        }
    }
    const handleChange =(e) => {
        const { value, id } = e.target
        setAnimal({ ...animal, [id]: value })
    }



    return (
        <div>
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="animal_name">Animal Species: </label>
                <input onChange={handleChange} type="text" id="animal_name" />
                <label htmlFor="class">Species Class: </label>
                <input onChange={handleChange} type="text" id="class" />
                <label htmlFor="description">Description: </label>
                <input onChange={handleChange} type="text" id="description" />
                <label htmlFor="location">Location: </label>
                <input onChange={handleChange} type="text" id="location" />
                <label htmlFor="price">Cost: </label>
                <input onChange={handleChange} type="number" name="" id="price" />
                <input type="submit" value="Add a new BFF to the list!" />
            </form>
        </div>
    )
}

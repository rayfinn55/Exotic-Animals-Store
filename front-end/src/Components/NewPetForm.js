import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { apiURL } from '../util/apiURL.js'


export default function NewPetForm() {

    const [animal, setAnimal] = useState({
        animal_name: "",
        class: "",
        description: "",
        location: "",
        price: "",
        stock: true,
        img: ""
    })
    const API = apiURL()
    const history = useHistory()
    
    const addAnimal = (newAnimal) => {
        axios.post(`${API}/animals`, newAnimal)
        .then(
            () => {
                history.push('/pets')
            },
            (error) => {
                console.log(error)
            }
        )
        .catch((c) => console.warn("catch", c))
    }
    const handleChange = (e) => {
        const {value, id} = e.target
        setAnimal({...animal, [id]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addAnimal(animal)
    }


    return (
        <div>
            <h1>New Pet Component</h1>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="animal_name">Species: </label>
                <input onChange={handleChange} type="text" id="animal_name" />
                <label htmlFor="class">Class of Species: </label>
                <input onChange={handleChange} type="text" id="class" />
                <label htmlFor="description">Description: </label>
                <textarea onChange={handleChange} type="text" id="description" placeholder="Description of new pet"/>
                <label htmlFor="img">Image url:</label>
                <input onChange={handleChange} type="text" id="img" />
                <label htmlFor="location">Location: </label>
                <input onChange={handleChange} type="text" id="location" />
                <label htmlFor="price">Cost: </label>
                <input onChange={handleChange} type="number" id="price" />
                <label htmlFor="img">URL for Image:</label>
                <input onChange={handleChange} type="text" id="img" />

                <input type="submit" value="Add a new BFF to the list!" />
            </form>
        </div>
    )
}

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { apiURL } from '../util/apiURL.js'


export default function NewPetForm() {

    const [animal, setAnimal] = useState({
        animal_name: "",
        class: "",
        description: "",
        img: "",
        location: "",
        price: ""
    })
    const API = apiURL()
    const history = useHistory()
    
    const addAnimal = async (newAnimal) => {
        await axios.post(`${API}/animals`, newAnimal)
        .then(
            (response) => {console.log(response)},
            (error) => {
                console.log('Error in NewPetForm')
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
        // history.push('/pets')
    }


    return (
        <div>
            <h1>New Pet Component</h1>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="animal_name">Species: </label>
                <input onChange={handleChange} type="text" id="animal_name" />
                <label htmlFor="class">Class of Species: </label>
                <input onChange={handleChange} type="text" id="class" />
                <label htmlFor="description">Description</label>
                <input onChange={handleChange} type="text" id="description" />
                <label htmlFor="img">Image url:</label>
                <input onChange={handleChange} type="text" id="img" />
                <label htmlFor="location">Location: </label>
                <input onChange={handleChange} type="text" id="location" />
                <label htmlFor="price">Cost: </label>
                <input onChange={handleChange} type="number" id="price" />

                <input type="submit" value="Add a new BFF to the list!" />
            </form>
        </div>
    )
}

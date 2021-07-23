import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../util/apiURL.js'
import { Link, useParams, useHistory } from 'react-router-dom'


export default function AnimalDetails() {

    const [animal, setAnimal] = useState({})
    const API = apiURL()
    const { id } = useParams()
    const history = useHistory()


    useEffect(() => {
        axios.get(`${API}/animals/${id}`)
        .then(response => setAnimal(response.data))
    }, [API, id])
    
    const handleDelete = async () => {
        try {
            await axios.delete(`${API}/animals/${id}`)
            .then(() => history.push(`/pets`))
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <h2>{animal.animal_name}</h2>
            <h3>Species Class: {animal.class}</h3>
            <p>Will this be your new best friend?</p> 
            <p>{animal.description}</p>
            <h4>Species located in {animal.location}</h4>
            <h4>Cost: {animal.price}</h4>
            {animal.stock ? <h4>In stock</h4> : <h4>Out of stock</h4>}
            <Link to={`/pets/edit/${id}`}><button>Edit</button></Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

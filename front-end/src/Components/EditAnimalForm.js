import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { apiURL } from '../util/apiURL.js'
import { Form, Row, Col, Button } from 'react-bootstrap'


export default function EditAnimalForm() {
	const [animal, setAnimal] = useState({
		animal_name: '',
		class: '',
		description: '',
		location: '',
		price: '',
		stock: true,
		img: '',
	});
	const API = apiURL();
	let { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		axios
			.get(`${API}/animals/${id}`)
			.then(
				(response) => setAnimal(response.data),
				(error) => console.log(error)
			)
			.catch((c) => console.warn(`Catch: `, c));
	}, [API, id]);
	const updateAnimal = (updatedAnimal) => {
		axios
			.put(`${API}/animals/${id}`, updatedAnimal)
			.then(
				() => {
					history.push(`/pets/${id}`);
				},
				(error) => {
					console.log(error);
				}
			)
			.catch((c) => console.warn(`Catch: `, c));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		updateAnimal(animal, id);
	};
	const handleChange = (e) => {
		const { value, id } = e.target;
		setAnimal({ ...animal, [id]: value });
	};
	const handleBack = () => {
		history.push(`/pets/${id}`)
	}

    return (
        <div>
            <Form className='text-center pt-4 mx-5' onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Species</Form.Label>
                        <Form.Control value={animal.animal_name} type='text' id='animal_name' placeholder='Giraffe' onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Class of Species</Form.Label>
                        <Form.Control value={animal.class} type='text' id='class' placeholder='Mammal' onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={animal.description} type='textarea' id='description' placeholder='Gracious long-necked grazer of the African plains' onChange={handleChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control value={animal.img} type='text' id='class' placeholder='www.picsum.photos/300/200' onChange={handleChange} />
                </Form.Group>

                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Location</Form.Label>
                        <Form.Control value={animal.location} type='text' id='location' placeholder='Africa' onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Cost</Form.Label>
                        <Form.Control value={animal.price} type='number' id='price' placeholder='$45,000' onChange={handleChange} />
                    </Form.Group>
                </Row>
                <div className='text-center mt-5'>
                    <Button className='mx-4' variant='secondary' onClick={handleBack}>Back</Button>
                    <Button className='mx-1' variant='success' type='submit'>Submit</Button>
                </div>
            </Form>
        </div>
    )
}

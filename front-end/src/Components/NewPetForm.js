import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { apiURL } from '../util/apiURL.js'
import { Form, Row, Col, Button } from 'react-bootstrap'


export default function NewPetForm() {
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
	const history = useHistory();

	const addAnimal = (newAnimal) => {
		axios
			.post(`${API}/animals`, newAnimal)
			.then(
				() => {
					history.push('/pets');
				},
				(error) => {
					console.log(error);
				}
			)
			.catch((c) => console.warn('catch', c));
	};
	const handleChange = (e) => {
		const { value, id } = e.target;
		setAnimal({ ...animal, [id]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addAnimal(animal);
	};

    return (
        <div>
            <Form className='mx-5' onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Species</Form.Label>
                        <Form.Control type='text' id='animal_name' placeholder='Giraffe' onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Class of Species</Form.Label>
                        <Form.Control type='text' id='class' placeholder='Mammal' onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='textarea' id='description' placeholder='Gracious long-necked grazer of the African plains' onChange={handleChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type='text' id='class' placeholder='www.picsum.photos/300/200' onChange={handleChange} />
                </Form.Group>

                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type='text' id='location' placeholder='Africa' onChange={handleChange} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Cost</Form.Label>
                        <Form.Control type='number' id='price' placeholder='$45,000' onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Button variant='success' type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

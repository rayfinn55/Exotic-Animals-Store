import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { apiURL } from '../util/apiURL.js';

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

	return (
		<div>
			<form action='' onSubmit={handleSubmit}>
				<label htmlFor='animal_name'>Animal Species: </label>
				<input
					onChange={handleChange}
					type='text'
					id='animal_name'
					value={animal.animal_name}
				/>
				<label htmlFor='class'>Species Class: </label>
				<input onChange={handleChange} type='text' id='class' value={animal.class} />
				<label htmlFor='description'>Description: </label>
				<textarea
					onChange={handleChange}
					type='text'
					id='description'
					value={animal.description}
				/>
				<label htmlFor='location'>Location: </label>
				<input onChange={handleChange} type='text' id='location' value={animal.location} />
				<label htmlFor='price'>Cost: </label>
				<input onChange={handleChange} type='number' name='' id='price' value={animal.price} />
				<label htmlFor='img'>Image url: </label>
				<input type='text' id='img' value={animal.img} />

				<input type='submit' value='Update this BFF!' />
			</form>
		</div>
	);
}

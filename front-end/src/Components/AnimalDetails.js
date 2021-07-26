import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { apiURL } from '../util/apiURL.js'
import { Link, useParams, useHistory } from 'react-router-dom'
import placeholder from '../Images/placeholder.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


export default function AnimalDetails() {
	const [animal, setAnimal] = useState({});
	const API = apiURL();
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		axios.get(`${API}/animals/${id}`).then((response) => setAnimal(response.data));
	}, [API, id]);

	const handleDelete = async () => {
		try {
			await axios.delete(`${API}/animals/${id}`).then(() => history.push(`/pets`));
		} catch (e) {
			console.error(e);
		}
	};

    const handleImgError = () => {
        setAnimal({ ...animal, img: placeholder })
    }


    return (
			<Container>
				<Card style={{ width: '65rem' }}>
					<Card.Body>
						<Card.Title style={{ textAlign: 'center' }}>{animal.animal_name}</Card.Title>
						<Card.Subtitle className='mb-2 text-muted' style={{ textAlign: 'center' }}>
							{animal.class}
						</Card.Subtitle>
						{animal.img ? (
							<img
								onError={handleImgError}
								src={animal.img}
								alt={`${animal.animal_name}`}
								style={{ height: '100%', margin: 'auto', display: 'block' }}
							/>
						) : null}
						<Card.Text style={{ textAlign: 'center' }}>
							<strong>Description:</strong>
							<br></br>
							{animal.description}
						</Card.Text>
						<Card.Text style={{ textAlign: 'center' }}>
							<strong>Location:</strong>
							<br></br> {animal.location}
						</Card.Text>
						<Card.Text style={{ textAlign: 'center' }}>
							<strong>Cost:</strong>
							<br></br> ${animal.price}
						</Card.Text>
            <Container style={{ textAlign: 'center' }}>
						<Link to={`/pets`}>
							<Button variant='secondary'>Back</Button>
						</Link>
            {' '}
						<Link to={`/pets/edit/${id}`}>
							<Button variant='primary'>Edit</Button>
						</Link>
            {' '}
						<Link>
							<Button variant='danger' onClick={handleDelete}>
								Delete
							</Button>
						</Link>
            </Container>
					</Card.Body>
				</Card>
			</Container>
		);
}
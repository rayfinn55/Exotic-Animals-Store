import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';



function Pets({ pets, loading }) {
	if (loading) {
		return <h2>Loading...</h2>;
	}
	return (
		<CardGroup>
			{pets.map((pet) => (
				<div key={pet.id} className='col-md-4 mb-5'>
					<Card style={{ width: '19rem' }}>
						<Card.Title style={{ textAlign: 'center'}}>{pet.animal_name}</Card.Title>
						<p style={{ textAlign: 'center'}}>{pet.class}</p>
						<Card.Img variant='top' src={pet.img} alt={`A cool ${pet.animal_name}`} />
						<Card.Text style={{ textAlign: 'center'}}>
							<strong>Location:</strong> {pet.location}
						</Card.Text>
						<Card.Text style={{ textAlign: 'center'}}>
							<strong>Cost:</strong> ${pet.price.toLocaleString()}
						</Card.Text>
						<Card.Text style={{ textAlign: 'center'}}>
							<strong>Availability:</strong>
							{pet.stock ? <p>In Stock</p> : <p>Out of stock</p>}
						</Card.Text>
						<Link to={`pets/${pet.id}`} style={{ textAlign: 'center'}}>
							<Button variant='warning'>Details</Button>
						</Link>
					</Card>
				</div>
			))}
            </CardGroup>
	);
}

export default Pets;

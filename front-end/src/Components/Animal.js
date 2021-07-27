import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import placeholder from '../Images/placeholder.png'


function Pets({ pets, loading }) {
	if (loading) {
		return <h2>Loading...</h2>;
	}
	const handleBrokenImg = (e) => {
		e.target.src = placeholder
	}

	return (
		<CardGroup>
			{pets.map((pet) => (
				<div key={pet.id} className='col-md-4 mb-5'>
					<Card className='mb-5' style={{ width: '19rem' }}>
						<Card.Title style={{ textAlign: 'center'}}>{pet.animal_name}</Card.Title>
						<p style={{ textAlign: 'center'}}>{pet.class}</p>
						<Card.Img variant='top' style={{height: '100%'}} src={pet.img} onError={handleBrokenImg} alt={`A cool ${pet.animal_name}`} />
						<Card.Text style={{ textAlign: 'center'}}>
							<strong>Location:</strong> {pet.location}
						</Card.Text>
						<Card.Text style={{ textAlign: 'center' }}>
							<strong>Cost:</strong> ${pet.price.toLocaleString()}
						</Card.Text>
						{
						pet.stock ? 
						<Card.Text style={{ textAlign: 'center'}}><strong>Availability:</strong>In Stock</Card.Text> : 
						<Card.Text style={{ textAlign: 'center'}}><strong>Availability:</strong>Out of Stock</Card.Text>
						}
						<Link to={`pets/${pet.id}`} style={{ textAlign: 'center', marginBottom: '20px'}}>
							<Button variant='warning'>Details</Button>
						</Link>
					</Card>
				</div>
			))}
        </CardGroup>
	);
}

export default Pets;

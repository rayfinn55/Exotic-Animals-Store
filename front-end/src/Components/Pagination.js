import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function Pagination({ petsPerPage, totalPets, handleClick }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPets / petsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
		<Container className='mr-1 pl-5' style={{display: 'flex' }}>
			<nav>
				<ul className='pagination'>
					{pageNumbers.map((number) => (
						<li key={number} className='page-item'>
							<Button onClick={() => handleClick(number)} className='page-link'>
								{number}
							</Button>
						</li>
					))}
				</ul>
			</nav>
		</Container>
  );
}

export default Pagination

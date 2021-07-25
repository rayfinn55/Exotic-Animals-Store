import React from 'react'

function Pagination({ petsPerPage, totalPets, handleClick }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPets / petsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className="pagination">
    {pageNumbers.map(number => (
      <li key={number} className='page-item'>
        <button onClick={() => handleClick(number)} className='page-link'>
          {number}
        </button>
      </li>
    ))}
      </ul>
    </nav>
  )
}

export default Pagination

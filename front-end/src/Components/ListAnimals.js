import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../util/apiURL';
import Pagination from './Pagination';
import Animal from './Animal';


export default function ListItems() {
	const [pets, setPets] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [petsPerPage] = useState(6);
	const API = apiURL();

    useEffect(() => {
        const fetchPets = async () => {
            setLoading(true);
            const res = await axios.get(`${API}/animals`);
            setPets(res.data);
            setLoading(false);
        }
        fetchPets()
    }, [API])

    const indexOfLastPet = currentPage * petsPerPage;
    const indexOfFirstPet = indexOfLastPet - petsPerPage;
    const currentPets = pets.slice(indexOfFirstPet, indexOfLastPet);

    // Switch Pages
    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <div>
            <h1 className='text-primary mb-3'>Animals</h1>
            <Animal pets={currentPets} loading={loading}/>
            <Pagination petsPerPage={petsPerPage} totalPets={pets.length} handleClick={handleClick} />
        </div>
    )
}

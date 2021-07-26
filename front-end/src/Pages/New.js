import React from 'react';
import NewPetForm from '../Components/NewPetForm';

export default function New() {

    return (
        <div>
            <h1 className='text-center header'>Add a new Pet to the list!</h1>
            <NewPetForm />
        </div>
    )
}

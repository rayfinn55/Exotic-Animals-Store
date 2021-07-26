import React from 'react'
import ListAnimals from '../Components/ListAnimals'


export default function Index() {

    return (
        <div>
            <h1 style={{marginBottom: '90px', marginTop: '90px'}} className='text-center header'>Animals</h1>
            <ListAnimals />
        </div>
    )
}

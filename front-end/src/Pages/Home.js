import React from 'react'
import Giraffe from '../Images/LapGiraffe.jpeg'


export default function Home() {

    return (
        <div>
            <h3 className='text-center header' >Welcome to</h3>
            <h1 className='text-center'>My New Best Friend</h1>
            <h2 className='text-center'>We are here for all of your exotic animals needs</h2>
            <p className='text-center'>In our shop (much like in life) you can choose your best friend!</p>
            <h3 className='text-center'>This can be your new BFF on YOUR couch!</h3>
            <img src={Giraffe} alt="Adorable Giraffe" />
        </div>
    )
}

import React from 'react'
import Giraffe from '../Images/LapGiraffe.jpeg'


export default function Home() {

    return (
        <div>
            <h1>Welcome to the Exotic Animals Shop</h1>
            <h2>We are here for all of your exotic animals needs</h2>
            <img src={Giraffe} alt="Adorable Giraffe" />
        </div>
    )
}

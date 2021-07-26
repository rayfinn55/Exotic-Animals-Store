import React from 'react';
import Giraffe from '../Images/LapGiraffe.jpeg';

export default function Home() {
	return (
		<div>
			<h1>Welcome to the Exotic Animals Shop</h1>
			<h2>We are here for all of your exotic animals needs</h2>
			<p>In our shop (much like in life) you can choose your best friend!</p>
			<h3>This can be your new BFF on YOUR couch!</h3>
			<img src={Giraffe} alt='Adorable Giraffe' />
		</div>
	);
}

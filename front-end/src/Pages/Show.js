import React from 'react';
import AnimalDetails from '../Components/AnimalDetails';

export default function Show() {

	const phraseArray = [
		"Will you two go ice-skating?",
		"Somebody to tell bedtime horror stories with",
		"You can Facetime each other when you're not home",
		"You can look up the latest dank memes together",
		"Somebody to lay back in bed and listen to podcasts with",
		"A best friend to make the popcorn for movie night",
		"Somebody to pass notes to that person you have a crush on"
	]
	const randomNum = (arr) => {
		return Math.floor(Math.random() * (arr.length))
	}

	return (
		<div>
			<h1 className='header text-center'>{phraseArray[randomNum(phraseArray)]}</h1>
			<AnimalDetails />
		</div>
	);
}

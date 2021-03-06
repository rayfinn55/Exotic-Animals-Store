import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import FourOFour from './Pages/FourOFour';
import Index from './Pages/Index';
import NavBar from './Components/NavBar';
import New from './Pages/New';
import Show from './Pages/Show';
import Edit from './Pages/Edit';

import './App.css';

export default function App() {
	return (
		<div className='App'>
			<NavBar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/pets' component={Index} />
				<Route path='/pets/:id/edit' component={Edit} />
				<Route exact path='/pets/new' component={New} />
				<Route path='/pets/:id' component={Show} />
				<Route exact path='*' component={FourOFour} />
			</Switch>
		</div>
	);
}

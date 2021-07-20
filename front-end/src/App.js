import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import FourOFour from './Pages/FourOFour'
import Index from './Pages/Index'
import NavBar from './Components/NavBar'
import New from './Pages/New'


export default function App() {

    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/pets' component={Index} />
                <Route path='/pets/new' component={New} />
                <Route exact path='*' component={FourOFour} />
            </Switch>
        </div>
    )
}

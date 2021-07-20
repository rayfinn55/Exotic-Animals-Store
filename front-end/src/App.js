import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import FourOFour from './Pages/FourOFour'


export default function App() {

    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route path='*' component={FourOFour} />
        </div>
    )
}

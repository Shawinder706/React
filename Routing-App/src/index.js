import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Home from './screens/Home'
import About from './screens/About'
import FavThings from './screens/FavouriteThings'


const MainComponent = () =>
{
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/favouritethings">Things</Link></li>
                </ul>


                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/favouritethings" component={FavThings} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<MainComponent />, document.getElementById("root"))
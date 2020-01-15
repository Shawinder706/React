import React from 'react'
import ReactDOM from 'react-dom'
import { BroeserRouter, Route, Link, BrowserRouter } from 'react-router-dom'

import Home from './screens/home'
import About from './screens/about'
import Topic from './screens/topic'

const MainComponent = () =>
{
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topic</Link></li >
                </ul >
                <Route exact path='/' component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/topics' component={Topic}></Route>
            </div >
        </BrowserRouter >
    )
}

ReactDOM.render(<MainComponent />, document.getElementById("root"))

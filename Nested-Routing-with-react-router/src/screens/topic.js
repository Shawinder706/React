import React from 'react'
import Top from './top'

import { BrowserRouter, Route, Link } from 'react-router-dom'


const Topic = ({ match }) =>
{
    return (
        <div>
            <h1>Topic {match.url} </h1>
            <ul>
                <li><Link to={`${match.url}/rendering`}>Render</Link></li>
                <li><Link to={`${match.url}/components`}>Component</Link></li>
                <li><Link to={`${match.url}/props`}>Props</Link></li>
            </ul>
            <Route path={`${match.url}/:topicID`} component={Top} />
            <Route exact path={match.url}
                render={() => <h3>Please select a topic</h3>}
            />
        </div>
    )
}

export default Topic
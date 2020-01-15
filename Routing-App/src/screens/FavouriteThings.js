import React from 'react'
import { Route, Link } from 'react-router-dom'

import Thing from './Things'

const Things = ({ match }) =>
{
    return (

        < div >

            <h1>Favourite Things</h1>
            <ul>
                <li><Link to={`${match.url}/favouritecar`}>Favourite car</Link></li>
                <li><Link to={`${match.url}/favouritefood`}>Favourite Food</Link></li>
                <li><Link to={`${match.url}/favouritemovie`}>Favourite Movie</Link></li>
            </ul>
            <Route path={`${match.url}/:ID`} component={Thing}></Route>

        </div >
    )
}

export default Things
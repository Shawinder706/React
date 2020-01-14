import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>
{
    return (
        <div>
            <h1>{props.title}</h1>
            <ul>

                <li><a href="/">Home</a></li>
                <li><a href="/aboutus">About us</a></li>
                <li><a href="/topics">Topics</a></li>
            </ul>
        </div>
    )
}

export default Header
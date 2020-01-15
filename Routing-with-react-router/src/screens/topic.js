import React from 'react'


const Topic = ({ match }) =>
{
    return (
        <div>
            <h1>Topic {match.url} </h1>
        </div>
    )
}

export default Topic
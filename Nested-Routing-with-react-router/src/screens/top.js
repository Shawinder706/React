import React from 'react'

const Top = ({ match }) =>
{
    return (
        <div>

            <h1>{match.params.topicID}</h1>
        </div>
    )
}

export default Top
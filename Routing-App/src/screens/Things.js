import React from 'react'

const Thing = ({ match }) =>
{
    let item = " "

    if (match.params.ID === "favouritecar") {
        item = " my favourite Car is 'BMW' "
    } else if (match.params.ID === "favouritefood") {
        item = " my favourite Food is 'Pizza'"
    } else if (match.params.ID === "favouritemovie") {
        item = " my favourite Movie is 'Three Idiots'"
    }
    return (
        <div>
            <h1>{item}</h1>
        </div>
    )
}

export default Thing
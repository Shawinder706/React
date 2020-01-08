import React from 'react';

const person = (props) =>
{
    return (
        <div className="Person">

            <ul>
                <li>{props.name} {props.age} {props.desc}</li>
                <li>{props.name} {props.age} {props.desc}</li>
                <li>{props.name} {props.age} {props.desc}</li>
            </ul>

        </div>
    )
};


export default person;
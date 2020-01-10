import React from 'react'
//import ReactDOM from 'react-dom'

const numberOfStudents = (props) =>
{
    return (
        <div>
            <div className="enrolled-students-wrap">
                <h1>Enrolled Students : {props.enrolled}</h1>
                <button onClick={props.addStudent}>Add 1 Enrolled Student </button>
                <div>
                    <input type="number" name="qty" onChange={props.onchange} />
                    <button onClick={props.click} >Add bulk students</button>
                </div>
                <h1>Waitlisted Students : {props.waitlist}</h1>
                <button>Add 1 Waitlisted Student </button>
                <div>
                    <input type="number" />
                    <button>Add bulk Waitlisted</button>
                </div>
            </div>
        </div>
    )

}

export default numberOfStudents
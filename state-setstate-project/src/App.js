import React from "react"
import ReactDOM, { render } from 'react-dom'
//import NumberOfStudents from './presentation/numberOfStudents'
import Students from './numberOfStudents'


class App extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            enrolledStudents: 0,
            waitListedStudents: 0,
            addBulkEnrolledStu: 0
        }
    }

    addStudents = () =>
    {
        this.setState({
            enrolledStudents: this.state.enrolledStudents + 1
        })
    }

    changeEnrollStu = (event) =>
    {
        // console.log("u " + event.target.value)
        // this.setState({
        //     addBulkEnrolledStu: event.target.value
        // })
        console.log(event.target.value)
        return event.target.value

    }

    clickbtn = (val) =>
    {
        console.log("in click " + val)
    }

    render()
    {
        return (
            <Students
                enrolled={this.state.enrolledStudents}
                waitlist={this.state.waitListedStudents}
                addStudent={this.addStudents}
                onchange={(event) => this.changeEnrollStu(event)}
                click={() => this.clickbtn()}
            >

            </Students>
        )
    }


}

export default App
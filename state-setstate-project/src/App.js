import React from "react"
import ReactDOM, { render } from 'react-dom'
import Students from './numberOfStudents'


class App extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            enrolledStudents: 0,
            waitListedStudents: 0,
            addBulkEnrolledStu: 0,
            addBulkWaitlistStu: 0
        }
    }
    // get and assign the student input value 
    changeStudent = (event, student) =>
    {
        if (student === "enrolled") {
            this.setState({
                addBulkEnrolledStu: event.target.value
            })
        } else if (student === "listed") {
            this.setState({
                addBulkWaitlistStu: event.target.value
            })
        }



    }
    // add one student 
    addOneStudents = (student) =>
    {
        if (student === "enrolled") {
            this.setState({
                enrolledStudents: this.state.enrolledStudents + 1
            })
        } else if (student === "listed") {
            this.setState({
                waitListedStudents: this.state.waitListedStudents + 1
            })
        }

    }

    // add bulk students 
    addBulkStudents = (val, student) =>
    {
        if (student === "enrolled") {

            this.setState({
                enrolledStudents: this.state.enrolledStudents + parseInt(val)
            })
        } else if (student === "listed") {
            console.log("2 " + student)
            this.setState({
                waitListedStudents: this.state.waitListedStudents + parseInt(val)
            })
        }

    }



    render()
    {
        return (
            <Students
                enrolled={this.state.enrolledStudents}
                waitlist={this.state.waitListedStudents}
                // Enrolled user operations
                addStudent={this.addOneStudents.bind(this, 'enrolled')}
                onchange={(event) => this.changeStudent(event, 'enrolled')}
                click={this.state.addBulkEnrolledStu !== 0 && this.state.addBulkEnrolledStu ? this.addBulkStudents.bind(this, this.state.addBulkEnrolledStu, "enrolled") : null}
                // wait listed user operations
                onchangeListed={(event) => this.changeStudent(event, 'listed')}
                listClick={this.addOneStudents.bind(this, 'listed')}
                listBulkStu={this.state.addBulkWaitlistStu !== 0 && this.state.addBulkWaitlistStu ? this.addBulkStudents.bind(this, this.state.addBulkWaitlistStu, "listed") : null}

            >

            </Students>
        )
    }


}

export default App
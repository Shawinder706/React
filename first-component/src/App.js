import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './person'
import './App.css';


class App extends Component
{

    state = {
        person: [{
            name: "Aman", age: 21
        },
        { name: "Ravi", age: 22 },
        ]
    }

    nameChangeHandler = (newName) =>
    {
        this.setState({
            person: [{
                name: newName, age: 21
            },
            { name: "Ravi verma", age: 22 },
            ]
        })
    }

    switchNameHandler = (event) =>
    {
        this.setState({

            person: [{
                name: "Aman", age: 21
            },
            { name: event.target.value, age: 22 },
            ]

        })
    }


    render()
    {
        return (
            <div className="App">

                <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.nameChangeHandler.bind(this, 'method refernce')}></Person>
                <Person name={this.state.person[1].name} age={this.state.person[1].age} change={this.switchNameHandler}></Person>
                {/* <button onClick={() => {return this.nameChangeHandler("myname")} }>click me</button> */}
                {/* <button onClick={this.nameChangeHandler.bind(this,'max') } >click me</button> */}
                <button onClick={this.nameChangeHandler.bind(this, 'max')} >click me</button>

                {/* This way is not working beacause when js render in browser function executes automatically
<button onClick={ this.nameChangeHandler("myname") }>click me</button> 
*/}


            </div>
        );
    }
}

export default App;

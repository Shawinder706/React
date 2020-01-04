import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './person' 
import './App.css';


class App extends Component{
  state={
    person:[{
      name:"Max",age:21},
    {name:"Manu",age:27},
    {name:'Stephanie',age:29}]
  }

  switchNameHandler=(newName)=>{
    this.setState({
      person:[
        {name:newName,age:21},
        {name:'Manu',age:27},
        {name:'Stephanie',age:29}
      ]
    })
  }

  render(){
    

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchNameHandler.bind(this, 'Max!')} >My Hobbies:Racing</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
}
}

export default App;

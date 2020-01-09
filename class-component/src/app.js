import React from 'react'
import ReactDOM from 'react-dom'

const App = props =>
{
    return (
        <div>
            <Hello name="shawinder" lname="singh" age={77} />
            <Hello name="max" lname="jhon" age={24} />
        </div>
    );
};

class Hello extends React.Component
{
    render()
    {
        return (
            <div className="App">
                <p>{this.props.name}</p>
            </div>
        )
    }
}


export default App
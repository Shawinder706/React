import React from 'react'
import ReactDOM from 'react-dom'


const App = () =>
{
    return (
        <BankDetails />
    )
}

class BankDetails extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            savingAccountBalance: 2000,
            addAmount: 0
        }
    }

    increment = () =>
    {
        this.setState(
            {
                savingAccountBalance: this.state.savingAccountBalance + parseInt(this.state.addAmount)
            }
        )

    }

    render()
    {
        return (
            <div>
                <h5>Saving Account Balance : {this.state.savingAccountBalance}</h5>
                <label>Add Amount</label>
                <input type="number" onChange={event => this.setState({ addAmount: event.target.value })} value={this.state.addAmount} />
                <button onClick={this.increment.bind(this)}>Add amount</button>
            </div>
        )
    }
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'


const myTest = () =>
{
    return (
        <div>
            <App name="max"></App>
        </div>

    )
}


export default myTest;

//handle props in class
class App extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            savings: {
                accountBalance: 1000
            },
            checking: {
                balance: {
                    accountBalance: 900
                }
            }
        };
    }
    render()
    {
        return (
            <div>
                <p>{this.props.name} saving account balance is: {this.state.savings.accountBalance}</p>
                <p>Checking Account {this.state.checking.balance.accountBalance}</p>
            </div>
        )
    }

}


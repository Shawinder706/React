import React from 'react'
import ReactDOM from 'react-dom'




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
                <p>saving account balance is: {this.state.savings.accountBalance}</p>
                <p>Checking Account {this.state.checking.balance.accountBalance}</p>
            </div>
        )
    }

}


export default App
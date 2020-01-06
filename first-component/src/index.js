import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(myCmp('apple','mango','grapes','banana'), document.getElementById('root'));

function myCmp(apple,mango,grapes,banana){
    return(
        <div>
        <ul>
            <li>{apple}</li>
            <li>{mango}</li>
        </ul>
        <ol>
            <li>{grapes}</li>
            <li>{banana}</li>
        </ol>
    </div>
    )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

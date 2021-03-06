import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/home';
import About from './screens/about';
import Topics from './screens/topic';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const App = () => (

    <Router>
        <div>
            {/* linking */}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
            {/* Redirecting */}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />

        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
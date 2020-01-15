import React from 'react'
import ReactDOM from 'react-dom'

import Home from "./screens/home"
import About from "./screens/about"
import Topic from "./screens/topics"

const MainComponent = (props) =>
{
    switch (props.path) {
        case '/aboutus':
            return <About></About>
        case '/topics':
            return <Topic></Topic>
        default:
            return <Home></Home>
    }
}

const pathName = window.location.pathname
console.log(pathName)


ReactDOM.render(<MainComponent path={pathName} />, document.getElementById("root"))

window.addEventListener('popstate', () =>
{
    pathname = window.location.pathname;
});
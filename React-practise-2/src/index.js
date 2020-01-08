import React from 'react-dom'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


function App()
{
    return (
        <div className="App">
            <Employe name="Jhon" age='20' desc="I am employe" ></Employe>
            <Employe name="Mac" age='22'></Employe>
            <Employe name="Max" age='24' desc="I am employe" ></Employe>
        </div>
    )
}

const Employe = (props) =>
{
    return (
        <div>
            <p>Employe Name {props.name}</p>
            <p>Employe Age {props.age}</p>
            <p>Employe Desc. {props.desc}</p>
        </div>
    )

}


Employe.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    desc: PropTypes.string
}

Employe.defaultProps = {
    decs: "I am employe"
}
ReactDOM.render(<App />, document.getElementById('root'));
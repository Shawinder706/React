import React from 'react'
import ReactDOM from 'react-dom'


// var arr = ["apple", "grapes", "banana", 'mango'];
// var empArr = []

// for (var i = 0; i < arr.length; i++) {
//     empArr.push(<li key={i}>{arr[i]}</li>)
// }



// const App = () =>
// {
//     return (
//         <div>
//             <List list={empArr}></List>
//         </div>
//     )

// }

// const List = (props) =>
// {
//     return (
//         <ul>{props.list}</ul>
//     )

// }


const item = [
    { name: 'apple', price: 20 },
    { name: "orange", price: 30 },
    { name: "grapes", price: 40 },
    { name: "banana", price: 50 },
]

const App = () =>
{
    return (
        <List items={item}></List>
    )
}

const List = props =>
{
    const listItems = props.items.map((item, index) =>
    {
        return (
            <li key={index}>{item.name} and price is {item.price}</li>
        )
    })

    return (
        <ul>{listItems}</ul>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

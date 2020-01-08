import React from 'react';
//import logo from './logo.svg';
import './App.css';

const App = () =>
{
  const items = [
    { name: 'Bread', price: 5 },
    { name: 'Milk', price: 15 },
    { name: 'Eggs', price: 25 },
    { name: 'Tea', price: 55 },
  ];
  return (
    <div>
      <List items={items}></List>
      <Employee name="Aman" age={21} position="Dev" />
      <GroceryList item1="Apples" item2="Oranges" item3="Mangoes" />
    </div>
  )
}


const List = (props) =>
{
  const totalItems = props.items.map((curItem, index) =>
  {
    return <li key={index}>{curItem.name} and price is {curItem.price}</li>
  })
  return (
    <ul>{totalItems}</ul>
  )
}

const Employee = (props) =>
{
  return (
    <div>
      <p>My name is {props.name},{props.age} years old and working as a {props.position} </p>
    </div>
  )
}

const GroceryList = (props) =>
{

  return (
    <ul>
      <li>{props.item1}</li>
      <li>{props.item2}</li>
      <li>{props.item3}</li>
    </ul>
  )

}

export default App;

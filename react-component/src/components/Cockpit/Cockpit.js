import React from 'react';

import classes from './Cockpit.css';
console.log("classes  " + classes)
const cockpit = (props) =>
{
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.yellow;
    console.log("classes Red " + classes.Red)
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      {console.log("classes cockpit " + classes.Cockpit)}
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;
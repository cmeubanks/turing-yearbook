import React from 'react';
import './Person.css';

// PERSON COMPONENT CODE GOES HERE
function Person(props){
  console.log(props)
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.quote}</p>
      <p>{props.superlative}</p>
    </div>
  )
}

export default Person;

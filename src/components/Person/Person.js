import React from 'react';
import './Person.css';

// PERSON COMPONENT CODE GOES HERE
function Person(props){
  console.log(props)
  return(
    <article>
      <img src={props.photo}/>
      <h2>{props.name}</h2>
      <p>{props.quote}</p>
      <p>{props.superlative}</p>
    </article>
  )
}

export default Person;

import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
function Cohort(props) {
  console.log(props)
  const personComponents = props.people.map(person => <Person key={person.id} name={person.name} quote={person.quote} superlative={person.superlative}/>)
  return (
    <main>
      {personComponents}
    </main>
  )
}

export default Cohort;

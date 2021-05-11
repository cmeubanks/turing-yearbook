import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
function Cohort(props) {
  console.log(props)
  return (
    <main>
      <Person/>
    </main>
  )
}

export default Cohort;

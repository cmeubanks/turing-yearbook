import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff
    }
    // console.log(this.state)
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
        <div>
          <Cohort people={this.state.staff}/>
        </div>
        YOUR CODE GOES HERE
      </div>
    );
  }
}

export default App;

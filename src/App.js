import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import GolfList from './GolfList'
import UserInput from './UserInput'


class App extends Component {
  state = {
    courses: {
      'course-1': { id: 'course-1', name: 'Coffin'},
      'course-2': { id: 'course-2', name: 'Meridian Hills'},
      'course-3': { id: 'course-3', name: 'Riverside'},
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <UserInput />
        <GolfList courses={this.state.courses} />
      </div>
    );
  }
}

export default App;

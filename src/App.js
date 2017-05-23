import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import GolfList from './GolfList'

class App extends Component {
  state = {
    golfs: {
      'golf-1': { id: 'golf-1', name: 'Coffin'},
      'golf-2': { id: 'golf-2', name: 'Meridian Hills'},
      'golf-3': { id: 'golf-3', name: 'Riverside'},
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <GolfList golfs={this.state.golfs} />
      </div>
    );
  }
}

export default App;

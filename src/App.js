import React, { Component } from 'react';

import CpAHooks from './Components/Hooks/ComponentA';
import CpContext from './Components/ContextApi/CountContext';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hooks</h2>
          <CpAHooks/>
          <h2>Context API</h2>
          <CpContext/>
          <h2>Reducer</h2>
          <h4>Soon ..</h4>

        </header>
      </div>
    );
  }
}

export default App;
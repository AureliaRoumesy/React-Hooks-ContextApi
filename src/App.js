import React, { Component } from 'react';

import CpAHooks from './Components/Hooks/ComponentA';
import CpAContext from './Components/ContextApi/ComponentA';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>React - Hooks</h2>
          <CpAHooks/>
          <h2>React - Context API</h2>
          <CpAContext/>
        </header>
      </div>
    );
  }
}

export default App;
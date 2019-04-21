import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <svg width="960" height="600">
          <BarChart width={960} height={600} />
        </svg>
      </div>
    );
  }
}

export default App;

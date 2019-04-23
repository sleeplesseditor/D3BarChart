import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import BarChart from './components/D3/BarChart';
import BarChart from './components/ReCharts/BarChart';

const revenueData = require('./data/revenues.json');

class App extends Component {

  state = {
    data: revenueData,
    width: 700,
    height: 500  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* <BarChart data={this.state.data} width={this.state.width} height={this.state.height} /> */}
        <BarChart />
      </div>
    );
  }
}

export default App;

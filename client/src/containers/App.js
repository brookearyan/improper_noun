import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Haikus from './Haikus';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Haikus />
      </div>
    );
  }
}
export default App;

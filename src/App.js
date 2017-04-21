import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Motivation from './components/Motivation';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Motivation />
      </div>
    );
  }
}

export default App;

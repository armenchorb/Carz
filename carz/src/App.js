import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
import Register from './components/register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Register />
      </div>
    );
  }
}

export default App;

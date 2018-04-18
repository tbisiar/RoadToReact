import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = 'Welcome to the Road to learn React.';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <h2>{helloWorld}</h2>
            Modify <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

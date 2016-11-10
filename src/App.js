'use strict';

import React, { Component } from 'react';
import Menu from './components/Menu';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Todo List</h2>
          <div className="App-intro">
            <Menu />
          </div>
        </div>
        <div className="container">
          <pre>npm run eject</pre>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

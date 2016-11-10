import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Todo List</h2>
          <div className="App-intro">
            <ul className="App-menu">
              <li>
                <Link to='/local-storage' activeClassName='active'>Local Storage</Link>
                <Link to='/firebase' activeClassName='active'>Firebase</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

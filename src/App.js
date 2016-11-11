import React, { Component } from 'react';
import Menu from './components/Menu';
import Todo from './components/Todo';
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
          {this.props.children}
          <Todo list={[]} />
        </div>
      </div>
    );
  }
}

export default App;

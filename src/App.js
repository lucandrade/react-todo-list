import React, { Component } from 'react';

import Menu from './components/Menu';
import Todo from './components/Todo';
import AppStore from './stores/AppStore';
import * as AppActions from './actions/AppActions';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.initialState = this.initialState.bind(this);
        this.updateState = this.updateState.bind(this);
        this.state = this.initialState();
    }

    initialState() {
        return {
            todo: AppStore.getTodoList(),
            showCompleted: AppStore.getShowCompleted()
        }
    }

    updateState() {
        this.setState(this.initialState());
    }

    componentDidMount() {
        AppStore.on('change', this.updateState);
    }

    componentWillUnmount() {
        AppStore.removeListener('change', this.updateState);
    }

    handleShowCompletedChange() {
        AppActions.toggleCompleted();
    }

    handleAddTodo(todo) {
        AppActions.addTodo({
            text: todo,
            completed: false
        });
    }

    handleToggleCompleted(id) {
        const item = AppStore.getTodo(id);

        if (item) {
            AppActions.updateTodo(id, {
                completed: !item.completed
            });
        }
    }

    handleChangeFilter(text) {
        let todo;

        if (text) {
            todo = AppStore.filterTodoList(text);
        } else {
            todo = AppStore.getTodoList();
        }

        this.setState({
            todo
        });
    }

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
                    <Todo
                        list={this.state.todo}
                        showCompleted={this.state.showCompleted}
                        onShowCompletedChange={this.handleShowCompletedChange.bind(this)}
                        onToggleCompleted={this.handleToggleCompleted.bind(this)}
                        onChangeFilter={this.handleChangeFilter.bind(this)}
                        onAddTodo={this.handleAddTodo.bind(this)} />
                </div>
            </div>
        );
    }
}

export default App;

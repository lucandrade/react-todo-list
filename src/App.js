import React, { Component } from 'react';

import Menu from './components/Menu';
import Todo from './components/Todo';
import AppStore from './stores/AppStore';
import * as AppActions from './actions/AppActions';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/bulma/css/bulma.css';
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
        if (!todo) {
            return;
        }
        
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

    handleRemoveTodo(id) {
        AppActions.removeTodo(id);
    }

    render() {
        return (
            <div>
                <div className="hero is-primary">
                    <div className="hero-head">
                        <nav className="nav is-primary">
                            <div className="nav-left">
                                <a href="#" className="nav-item is-brand">React Todo List</a>
                            </div>
                        </nav>
                    </div>
                </div>
                <nav className="nav has-shadow">
                    <Menu />
                </nav>
                <div className="container is-fluid">
                    <div className="content has-text-centered">
                        {this.props.children}
                        <Todo
                            list={this.state.todo}
                            showCompleted={this.state.showCompleted}
                            onShowCompletedChange={this.handleShowCompletedChange.bind(this)}
                            onToggleCompleted={this.handleToggleCompleted.bind(this)}
                            onChangeFilter={this.handleChangeFilter.bind(this)}
                            onRemoveTodo={this.handleRemoveTodo.bind(this)}
                            onAddTodo={this.handleAddTodo.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

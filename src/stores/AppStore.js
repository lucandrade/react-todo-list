import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

import Constants from '../constants/AppConstants';

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.todoList = [];
        this.showCompleted = false;
    }

    setTodoList(todoList) {
    	this.todoList = todoList;
    	this.emit('change');
    }

    addTodo(todo) {
    	this.todoList.push(todo);
    	this.emit('change');
    }

    getTodoList() {
    	return this.todoList;
    }

    toggleCompleted() {
    	this.showCompleted = !this.showCompleted;
    	this.emit('change');
    }

    getShowCompleted() {
    	return this.showCompleted;
    }

    handleActions(action) {
    	const { actions } = Constants;
    	console.log(action);
    	switch (action.type) {
            case actions.addTodo:
                this.addTodo(action.todo);
                break;
            case actions.toggleCompleted:
                this.toggleCompleted();
                break;
            default:
            	break;
        }
    }
}

const store = new AppStore();
dispatcher.register(store.handleActions.bind(store));
window.store = store;

export default store;

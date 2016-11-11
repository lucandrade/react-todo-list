import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

import Constants from '../constants/AppConstants';
import Storage from '../storage';

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.storage = null;
        this.setStorage('local');
        this.todoList = Storage.get('todo') || [];
        this.showCompleted = false;
    }

    setTodoList(todoList) {
    	this.todoList = todoList;
    	this.emit('change');
    }

    addTodo(todo) {
    	this.todoList.push(todo);
        Storage.set('todo', this.todoList);
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

    getStorage() {
        return this.storage;
    }

    setStorage(storage) {
        this.storage = storage;
        Storage.updateClient(this.storage);
        this.emit('change_storage');
        this.emit('change');
    }

    handleActions(action) {
    	const { actions } = Constants;
    	switch (action.type) {
            case actions.addTodo:
                this.addTodo(action.todo);
                break;
            case actions.toggleCompleted:
                this.toggleCompleted();
                break;
            case actions.setStorage:
                this.setStorage(action.storage);
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

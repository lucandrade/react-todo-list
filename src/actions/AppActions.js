import dispatcher from '../dispatcher';
import AppConstants from '../constants/AppConstants';

const { actions } = AppConstants;

export function toggleCompleted() {
	dispatcher.dispatch({
		type: actions.toggleCompleted
	});
}

export function addTodo(todo) {
	dispatcher.dispatch({
		type: actions.addTodo,
		todo
	});
}

export function setStorage(storage) {
	dispatcher.dispatch({
		type: actions.setStorage,
		storage
	});
}

export function updateTodo(id, data) {
	dispatcher.dispatch({
		type: actions.updateTodo,
		id,
		data
	});
}

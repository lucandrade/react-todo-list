const firebase = {
	apiKey: "AIzaSyC5hDXjJLz5CcyZM4ayIZuL1ATCyaIU2Tg",
	authDomain: "lucandrade.github.io",
	databaseURL: "https://react-todo-list-9284c.firebaseio.com",
	storageBucket: "react-todo-list-9284c.appspot.com"
}

const actions = {
	addTodo: 'ADD_TODO',
	toggleCompleted: 'TOGGLE_COMPLETED',
	setStorage: 'SET_STORAGE',
	updateTodo: 'UPDATE_TODO',
	removeTodo: 'REMOVE_TODO'
}

export default {
	firebase,
	actions
}

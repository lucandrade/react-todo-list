import React from 'react';

export default class TodoAdd extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		const todo = document.getElementById('todo-input').value;
		console.log('adicionar', todo);
	}

	render() {
		return (
			<form className='todo-form' onSubmit={this.handleSubmit.bind(this)}>
				<input name='todo' id='todo-input' placeholder='Todo' />
				<button type='submit' className='submit'>Add</button>
			</form>
		);
	}
}

import React from 'react';

export default class TodoAdd extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		const todo = document.getElementById('todo-input').value;
		this.props.onSubmit(todo);
		document.getElementById('todo-input').value = '';
	}

	render() {
		return (
			<form className='todo-form' onSubmit={this.handleSubmit.bind(this)}>
				<input name='todo' id='todo-input' placeholder='Add' />
				<button type='submit' className='submit'>Add</button>
			</form>
		);
	}
}

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
			<li className='add'>
				<form action='' onSubmit={this.handleSubmit.bind(this)}>
					<input placeholder='Add' id='todo-input' />
				</form>
			</li>
		);
	}
}

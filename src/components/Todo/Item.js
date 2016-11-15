import React from 'react';

export default class TodoItem extends React.Component {
	handleToggleCompleted(id) {
		this.props.onToggleCompleted(id);
	}

	handleRemove(id) {
		this.props.onRemoveTodo(id);
	}

	render() {
		const { text, completed, id } = this.props;
		let classes = ['todo-item'];
		let options = '';

		if (completed) {
			classes.push('completed');
		}

		if (id) {
			options = <div className="todo-item-options">
				<input
					onChange={this.handleToggleCompleted.bind(this, id)}
					type='checkbox'
					checked={completed} />
				<span className="todo-remove" onClick={this.handleRemove.bind(this, id)}>X</span>
			</div>
		}

		return (
			<li className={classes.join(' ')}>
				{text}
				{options}
			</li>
		);
	}
}

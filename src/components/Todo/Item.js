import React from 'react';

export default class TodoItem extends React.Component {
	handleToggleCompleted(id) {
		this.props.onToggleCompleted(id);
	}

	render() {
		const { text, completed, id } = this.props;
		let classes = ['todo-item'];

		if (completed) {
			classes.push('completed');
		}

		return (
			<li className={classes.join(' ')}>
				{text}
				{id ? <input
						onChange={this.handleToggleCompleted.bind(this, id)}
						type='checkbox'
						checked={completed} /> : ''}
			</li>
		);
	}
}

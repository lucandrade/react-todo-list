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
		let classes = [''];
		let options = '';

		if (completed) {
			classes.push('done');
		}

		if (id) {
			options = <div className="todo-item-options">
				<a
					onClick={this.handleToggleCompleted.bind(this, id)}
					className={'toggle' + (completed ? ' active' : '')}></a>
				<span
					className="icon-delete fa fa-trash"
					onClick={this.handleRemove.bind(this, id)} />
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

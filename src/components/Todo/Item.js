import React from 'react';

export default class TodoItem extends React.Component {
	render() {
		const { text, completed } = this.props;
		let classes = ['todo-item'];
		
		if (completed) {
			classes.push('completed');
		}

		return (
			<li className={classes.join(' ')}>
				{text}
				<input type='checkbox' checked={completed} />
			</li>
		);
	}
}

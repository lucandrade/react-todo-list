import React from 'react';

export default class TodoItem extends React.Component {
	render() {
		const { text, completed } = this.props;
		return (
			<li className={'todo-item ' + (completed ? 'completed' : '')}>
				{text}
			</li>
		);
	}
}

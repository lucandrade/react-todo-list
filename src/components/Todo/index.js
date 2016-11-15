import React from 'react';

import TodoList from './List';
import TodoFilter from './Filter';
import ShowCompleted from './ShowCompleted';

export default class Index extends React.Component {
	render() {
		return (
			<div className='todo'>
				<div className="todo-controls">
					<ShowCompleted
						checked={this.props.showCompleted}
						onChange={this.props.onShowCompletedChange} />
					<TodoFilter onChange={this.props.onChangeFilter} />
				</div>
				<TodoList
					{...this.props} />
			</div>
		);
	}
}

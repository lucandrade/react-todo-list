import React from 'react';

import TodoList from './List';
import TodoAdd from './Add';
import TodoFilter from './Filter';
import ShowCompleted from './ShowCompleted';

export default class Index extends React.Component {
	render() {
		return (
			<div className='todo'>
				<div className="todo-controls">
					<TodoAdd onSubmit={this.props.onAddTodo} />
					<TodoFilter onChange={this.props.onChangeFilter} />
					<ShowCompleted
						checked={this.props.showCompleted}
						onChange={this.props.onShowCompletedChange} />
				</div>
				<TodoList
					{...this.props} />
			</div>
		);
	}
}

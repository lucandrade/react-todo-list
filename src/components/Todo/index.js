import React from 'react';

import TodoList from './List';
import TodoAdd from './Add';
import ShowCompleted from './ShowCompleted';

export default class Index extends React.Component {
	render() {
		return (
			<div className='todo'>
				<TodoAdd />
				<ShowCompleted
					checked={this.props.showCompleted}
					onChange={this.props.onShowCompletedChange} />
				<TodoList list={this.props.list} />
			</div>
		);
	}
}

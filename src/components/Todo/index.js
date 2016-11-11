import React from 'react';

import TodoList from './List';
import TodoAdd from './Add';

export default class Index extends React.Component {
	render() {
		const { list } = this.props;
		return (
			<div className='todo'>
				<TodoAdd />
				<TodoList list={list} />
			</div>
		);
	}
}

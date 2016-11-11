import React from 'react';

import TodoItem from './Item';

export default class TodoList extends React.Component {
	render() {
		const { list } = this.props;
		return (
			<ul className='todo-list'>
				{list.length > 0 ? list.map((item, i) => {
					return <TodoItem key={i} text={item.completed} completed={item.completed} />;
				}) : <TodoItem text='Nenhum item cadastrado' completed={false} />}
			</ul>
		);
	}
}

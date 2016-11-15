import React from 'react';

import TodoItem from './Item';

export default class TodoList extends React.Component {
	render() {
		const { list, showCompleted, onToggleCompleted } = this.props;
		let filteredList = showCompleted ? list : list.filter((item) => {
			return !item.completed
		});

		return (
			<ul className='todo-list'>
				{filteredList.length > 0 ? filteredList.map((item, i) => {
					return <TodoItem
							key={i}
							{...item}
							onToggleCompleted={onToggleCompleted} />;
				}) : <TodoItem text='Nenhum item cadastrado' completed={false} />}
			</ul>
		);
	}
}

import React from 'react';

import TodoItem from './Item';
import TodoAdd from './Add';

export default class TodoList extends React.Component {
	render() {
		const { list, showCompleted, onToggleCompleted, onRemoveTodo } = this.props;
		let filteredList = showCompleted ? list : list.filter((item) => {
			return !item.completed
		});

		return (
			<ul className='todo-list'>
				<li className='add'>
					<TodoAdd onSubmit={this.props.onAddTodo} />
				</li>
				{filteredList.length > 0 ? filteredList.map((item, i) => {
					return <TodoItem
							key={i}
							{...item}
							onToggleCompleted={onToggleCompleted}
							onRemoveTodo={onRemoveTodo} />;
				}) : <TodoItem text='Nenhum item encontrado' completed={false} />}
			</ul>
		);
	}
}

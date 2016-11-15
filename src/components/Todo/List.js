import React from 'react';

import TodoItem from './Item';
import TodoAdd from './Add';
import TodoFooter from './Footer';

export default class TodoList extends React.Component {
	render() {
		const { list, showCompleted, onToggleCompleted, onRemoveTodo } = this.props;
		let filteredList = showCompleted ? list : list.filter((item) => {
			return !item.completed
		});

		return (
			<ul className='todo-list'>
				<TodoAdd onSubmit={this.props.onAddTodo} />
				{filteredList.length > 0 ? filteredList.map((item, i) => {
					return <TodoItem
							key={i}
							{...item}
							onToggleCompleted={onToggleCompleted}
							onRemoveTodo={onRemoveTodo} />;
				}) : <TodoItem text='No tasks found' completed={false} />}
				<TodoFooter list={filteredList} />
			</ul>
		);
	}
}

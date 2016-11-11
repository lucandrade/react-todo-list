import React from 'react';

export default class ShowCompleted extends React.Component {
	handleChange(e) {
		this.props.onChange();
	}

	render() {
		return (
			<div className='todo-filter'>
				<input
					type='checkbox'
					checked={this.props.checked}
					onChange={this.handleChange.bind(this)} /> Show completed
			</div>
		);
	}
}
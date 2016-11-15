import React from 'react';

export default class Filter extends React.Component {
	handleChange(e) {
		this.props.onChange(e.target.value);
	}

	render() {
		return (
			<div>
				<span className="icon-search fa fa-search" />
				<input
					value={this.props.text}
					onChange={this.handleChange.bind(this)}
					placeholder='Search'
					id='todo-search'
					className='input-search' />
			</div>
		);
	}
}

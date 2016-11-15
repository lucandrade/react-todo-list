import React from 'react';

export default class Filter extends React.Component {
	handleChange(e) {
		this.props.onChange(e.target.value);
	}

	render() {
		return (
			<div className='todo-filter'>
                <input
                    value={this.props.text}
                    placeholder='Find'
                    onChange={this.handleChange.bind(this)} />
            </div>
		);
	}
}

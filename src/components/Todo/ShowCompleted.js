import React from 'react';

export default class ShowCompleted extends React.Component {
	handleChange(e) {
		this.props.onChange();
	}

	render() {
		const classes = ['icon-setup', 'fa'];

		if (this.props.checked) {
			classes.push('fa-eye-slash');
		} else {
			classes.push('fa-eye');
		}

		return (
			<span className={classes.join(' ')} onClick={this.handleChange.bind(this)} title='Show completed tasks' />
		);
	}
}

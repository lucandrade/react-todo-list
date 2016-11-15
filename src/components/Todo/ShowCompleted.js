import React from 'react';

export default class ShowCompleted extends React.Component {
	handleChange(e) {
		this.props.onChange();
	}

	render() {
		const classes = ['icon-setup', 'fa'];
		let text = ' completed tasks';

		if (this.props.checked) {
			classes.push('fa-eye-slash');
			text = 'Hide' + text;
		} else {
			classes.push('fa-eye');
			text = 'Show' + text;
		}

		return (
			<span
				className={classes.join(' ')}
				onClick={this.handleChange.bind(this)}
				title={text} />
		);
	}
}

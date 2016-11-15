import React from 'react';

export default class TodoFooter extends React.Component {
	render() {
        const { list } = this.props;

        if (list.length === 0) {
            return null;
        }

		return (
			<li className='todo-footer'>
				<b>{list.length}</b> tasks were found
			</li>
		);
	}
}

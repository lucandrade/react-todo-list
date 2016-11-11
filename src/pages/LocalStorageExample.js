import React from 'react';

import * as AppActions from '../actions/AppActions';

export default class LocaStorageExample extends React.Component {
	constructor(props) {
		super(props);
		AppActions.setStorage('local');
	}

	render() {
		return (
			<div>
				<h2>Local Storage</h2>
			</div>
		);
	}
}
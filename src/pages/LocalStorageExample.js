import React from 'react';

import * as AppActions from '../actions/AppActions';

export default class LocaStorageExample extends React.Component {
	componentDidMount() {
        AppActions.setStorage('local');
    }

	render() {
		return (
			<div>
				<h1 className='title'>Local Storage</h1>
			</div>
		);
	}
}

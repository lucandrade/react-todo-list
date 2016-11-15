import React from 'react';

import * as AppActions from '../actions/AppActions';

export default class FirebaseExample extends React.Component {
	componentDidMount() {
        AppActions.setStorage('local');
    }
	
	render() {
		return (
			<div>
				<h1 className='title'>Firebase</h1>
			</div>
		);
	}
}

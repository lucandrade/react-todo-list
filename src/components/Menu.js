import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
	render() {
		return(
			<div className="nav-center">
				<Link to='/local-storage' className='nav-item is-tab' activeClassName='is-active'>Local Storage</Link>
				<Link to='/firebase' className='nav-item is-tab' activeClassName='is-active'>Firebase</Link>
			</div>
		);
	}
}

import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
	render() {
		return(
			<ul className="App-menu">
        <li>
          <Link to='/local-storage' activeClassName='active'>Local Storage</Link>
          <Link to='/firebase' activeClassName='active'>Firebase</Link>
        </li>
      </ul>
		);
	}
}

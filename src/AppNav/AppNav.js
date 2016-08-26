import React from 'react';
import { Link } from 'react-router';
import './style.scss';

export const App = React.createClass({

	render: function() {
		return (
			<div className="nav-bar">
				<Link className="nav-item" to={'/'}>Home</Link>
				<Link className="nav-item" to={'/about'}>About</Link>
				<Link className="nav-item" to={'/editorialboard'}>Editorial Board</Link>
				<Link className="nav-item" to={'/howto'}>How To</Link>
				<Link className="nav-item" to={'/collections'}>Collections</Link>
				<Link className="nav-item" to={'/begindraft'}>Begin Draft</Link>
			</div>
		);
	}
});

export default App;

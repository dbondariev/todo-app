import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => (
	<nav>
		<div className='nav-wrapper purple darken-2 px1'>
			<a href='/' className='brand-logo hide-on-med-and-down '>
				React + Typescript
			</a>
			<ul className='right '>
				<li>
					<NavLink to='/'>Event List</NavLink>
				</li>
				<li>
					<NavLink to='/about'>Information Page</NavLink>
				</li>
			</ul>
		</div>
	</nav>
);

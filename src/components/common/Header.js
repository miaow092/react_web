import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
	return (
		<header>
			<div className='header_inner'>
				<ul className='menuWeb'>
					<li>
						<NavLink to='/about'>About</NavLink>
					</li>
					<li>
						<NavLink to='/youtube'>Youtube</NavLink>
					</li>
					<li>
						<NavLink to='/gallery'>Gallery</NavLink>
					</li>
				</ul>
				<h1>
					<NavLink exact to='/'>
						✦ WILD FAWN ✦
					</NavLink>
				</h1>
				<ul className='util'>
					<li>
						<NavLink to='/shop'>Shop</NavLink>
					</li>
					<li>
						<NavLink to='/community'>Community</NavLink>
					</li>
					<li>
						<NavLink to='/join'>Join</NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;

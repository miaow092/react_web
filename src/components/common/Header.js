import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
	return (
		<header>
			<nav id='gnb'>
				<ul>
					<li>
						<NavLink to='/contatctus'>Contact Us</NavLink>
					</li>
					<li>
						<NavLink to='/account'>Account</NavLink>
					</li>
					<li>
						<NavLink to='/join'>Join</NavLink>
					</li>
				</ul>
			</nav>
			<div className='inner'>
				<h1>
					<NavLink to='/'>Feste</NavLink>
				</h1>
				<nav>
					<ul>
						<li>
							<NavLink to='/about'>ABOUT</NavLink>
						</li>
						<li>
							<NavLink to='/gallery'>GALLERY</NavLink>
						</li>
						<li>
							<NavLink to='/youtube'>YOUTUBE</NavLink>
						</li>
						<li>
							<NavLink to='/shop'>SHOP</NavLink>
						</li>
						<li>
							<FontAwesomeIcon icon={faBagShopping} />
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;

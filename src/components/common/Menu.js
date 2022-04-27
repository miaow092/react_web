import { useState, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Menu = forwardRef((props, ref) => {
	const [open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			open: () => setOpen(true),
			close: () => setOpen(false),
		};
	});

	return (
		<AnimatePresence>
			{open && (
				<>
					<motion.nav
						id='Menu'
						initial={{
							x: -1000,
							opacity: 0,
						}}
						animate={{
							x: 0,
							opacity: 1,
							transition: { duration: 0.5, type: 'spring', bounce: 0 },
						}}
						exit={{
							x: -1000,
							opacity: 0,
							transition: { duration: 0.5, type: 'spring', bounce: 0 },
						}}>
						<h1>
							<NavLink exact to='/'>
								✦ WILD FAWN ✦
							</NavLink>
						</h1>

						<ul
							id='gnb'
							onClick={() => {
								setOpen(false);
								props.setOpened(props.opened);
							}}>
							<li>
								<NavLink to='/about'>About</NavLink>
							</li>
							<li>
								<NavLink to='/community'>Community</NavLink>
							</li>
							<li>
								<NavLink to='/gallery'>Gallery</NavLink>
							</li>
							<li>
								<NavLink to='/gallery'>Gallery</NavLink>
							</li>
							<li>
								<NavLink to='/youtube'>Youtube</NavLink>
							</li>
							<li>
								<NavLink to='/contactus'>Contact Us</NavLink>
							</li>
							<li>
								<NavLink to='/join'>Join</NavLink>
							</li>
						</ul>
						<span
							onClick={() => {
								setOpen(false);
							}}>
							x
						</span>
					</motion.nav>
				</>
			)}
		</AnimatePresence>
	);
});

export default Menu;

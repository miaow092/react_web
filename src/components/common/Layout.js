import React, { useEffect, useRef } from 'react';

const path = process.env.PUBLIC_URL;

function Layout(props) {
	let frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure>
				<img src={`${path}/img/sub2.jpeg`} />
			</figure>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;

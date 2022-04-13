import React, { useEffect, useRef } from 'react';

function Layout(props) {
	let frame = useRef(null);

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure>
				<img src={`${props.src}`} />
				<h1>{props.title}</h1>
				<p>{props.des}</p>
			</figure>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;

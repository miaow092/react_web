import React from 'react';

function Popup(props) {
	return (
		<>
			<div className='mask'></div>
			<aside>
				<div className='inner'>{props.children}</div>
			</aside>
		</>
	);
}

export default Popup;

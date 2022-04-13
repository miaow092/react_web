import React, { useRef, useEffect, useState } from 'react';
import Layout from '../common/Layout';

function ContactUs() {
	return function Location() {
		const container = useRef(null);
		const { kakao } = window;

		useEffect(() => {
			const options = {
				center: new kakao.maps.LatLng(33.450701, 126.570667),
				level: 3,
			};

			const map = new kakao.maps.Map(container.current, options);
		}, []);

		return (
			<Layout name={'Location'}>
				<div id='map' ref={container}></div>
			</Layout>
		);
	};
}
export default ContactUs;

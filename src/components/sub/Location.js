import React, { useRef, useEffect, useState } from 'react';
import Layout from '../common/Layout';

function Location() {
	const path = process.env.PUBLIC_URL;
	const container = useRef(null);
	const { kakao } = window;
	const branch = useRef(null);

	const info = [
		{
			title: 'Ilsan Starfield Branch',
			latlng: new kakao.maps.LatLng(37.6475244, 126.8963475),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(72.25, 66.5),
			imgPos: { offset: new kakao.maps.Point(36.125, 66.5) },
		},
		{
			title: 'Hanam Starfield Branch',
			latlng: new kakao.maps.LatLng(37.5454148, 127.2237176),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(72.25, 66.5),
			imgPos: { offset: new kakao.maps.Point(36.125, 66.5) },
		},
		{
			title: 'Bucheon Starfield Branch',
			latlng: new kakao.maps.LatLng(37.4615158, 126.8138646),
			imgSrc: `${path}/img/marker.png`,
			imgSize: new kakao.maps.Size(72.25, 66.5),
			imgPos: { offset: new kakao.maps.Point(36.125, 66.5) },
		},
	];

	const [map, setMap] = useState(null);
	const [mapInfo] = useState(info);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		container.current.innerHTML = '';
		const options = {
			center: mapInfo[index].latlng,
			level: 3,
		};

		const mapInstance = new kakao.maps.Map(container.current, options);
		const markerPosition = mapInfo[index].latlng;
		const imgSrc = mapInfo[index].imgSrc;
		const imgSize = mapInfo[index].imgSize;
		const imgPos = mapInfo[index].imgPos;
		const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);
		const marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImg,
		});

		marker.setMap(mapInstance);

		const mapTypeControl = new kakao.maps.MapTypeControl();
		mapInstance.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

		const zoomControl = new kakao.maps.ZoomControl();
		mapInstance.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

		const mapInit = () => {
			mapInstance.setCenter(mapInfo[index].latlng);
		};
		setMap(mapInstance);

		const lis = branch.current.querySelectorAll('li');
		for (const li of lis) li.classList.remove('on');
		lis[index].classList.add('on');

		window.addEventListener('resize', mapInit);
		return () => {
			window.removeEventListener('resize', mapInit);
		};
	}, [index]);

	return (
		<>
			<Layout name={'Location'}>
				<section className='content_location'>
					<ul className='survice'>
						<li>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
								<path d='M280 145.3V112h16C309.3 112 320 101.3 320 88S309.3 64 296 64H215.1C202.7 64 192 74.75 192 87.1S202.7 112 215.1 112H232v33.32C119.6 157.3 32 252.4 32 368h448C480 252.4 392.4 157.3 280 145.3zM488 400h-464C10.75 400 0 410.7 0 423.1C0 437.3 10.75 448 23.1 448h464c13.25 0 24-10.75 24-23.1C512 410.7 501.3 400 488 400z' />
							</svg>
							<h1>Customer Service</h1>
							<p>concierge@lovefeste.com</p>
						</li>
						<li>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
								<path d='M191.1 479.1C191.1 497.6 206.4 512 223.1 512h32c17.6 0 32-14.4 32-32v-64h160v64c0 17.6 14.41 32 32.01 32L511.1 512c17.6 0 32-14.4 32-32l.0102-128H192L191.1 479.1zM637.2 256.9l-19.5-29.38c-28.25-42.25-75.38-67.5-126.1-67.5H255.1L174.7 78.75c20.13-20 22.63-51 7.5-73.88C178.9-.2552 171.5-1.005 167.1 3.37L125.2 45.25L82.36 2.37C78.74-1.255 72.74-.6302 69.99 3.62c-12.25 18.63-10.25 44 6.125 60.38c3.25 3.25 7.25 5.25 11.25 7.5c-2.125 1.75-4.625 3.125-6.375 5.375l-74.63 99.38C-.8895 185.9-2.014 198.9 3.361 209.7l14.38 28.5c5.375 10.88 16.5 17.75 28.5 17.75H77.24c8.5 0 16.63-3.375 22.63-9.375l38.13-34.63l54.04 108h351.1l-.0102-77.75c16.25 12.13 18.25 17.5 40.13 50.25c4.875 7.375 14.75 9.25 22.13 4.375l26.63-17.63C640.2 274.2 642.2 264.2 637.2 256.9zM296.2 243.2L279.7 259.4l3.875 22.75c.625 4.125-3.625 7.125-7.25 5.25L255.1 276.7L235.6 287.4C231.1 289.2 227.7 286.2 228.4 282.1l3.875-22.75L215.7 243.2c-3-2.875-1.25-7.875 2.875-8.5l22.75-3.25l10.25-20.75c1.75-3.625 7.125-3.625 9 0l10.13 20.75l22.88 3.25C297.6 235.4 299.2 240.4 296.2 243.2zM408.2 243.2l-16.5 16.13l3.875 22.75c.625 4.125-3.625 7.125-7.25 5.25L367.1 276.7l-20.38 10.63c-3.625 1.875-7.875-1.125-7.25-5.25l3.875-22.75l-16.5-16.13c-3-2.875-1.25-7.875 2.875-8.5l22.75-3.25l10.25-20.75c1.75-3.625 7.125-3.625 9 0l10.13 20.75l22.88 3.25C409.6 235.4 411.2 240.4 408.2 243.2zM520.2 243.2l-16.5 16.13l3.875 22.75c.625 4.125-3.625 7.125-7.25 5.25l-20.38-10.63l-20.38 10.63c-3.625 1.875-7.875-1.125-7.25-5.25l3.875-22.75l-16.5-16.13c-3-2.875-1.25-7.875 2.875-8.5l22.75-3.25l10.25-20.75c1.75-3.625 7.125-3.625 9 0l10.13 20.75l22.88 3.25C521.6 235.4 523.2 240.4 520.2 243.2z' />
							</svg>
							<h1>Customer Service</h1>
							<p>concierge@lovefeste.com</p>
						</li>
						<li>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
								<path d='M64 64V48C64 39.16 71.16 32 80 32H144C152.8 32 160 39.16 160 48V64H192L242.5 38.76C251.4 34.31 261.2 32 271.1 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V128C0 92.65 28.65 64 64 64zM220.6 121.2C211.7 125.7 201.9 128 192 128H64V192H178.8C200.8 176.9 227.3 168 256 168C284.7 168 311.2 176.9 333.2 192H448V96H271.1L220.6 121.2zM256 216C207.4 216 168 255.4 168 304C168 352.6 207.4 392 256 392C304.6 392 344 352.6 344 304C344 255.4 304.6 216 256 216z' />
							</svg>
							<h1>Press</h1>
							<p>press@lovefeste.com</p>
						</li>
						<li>
							<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
								<path d='M352 111.1c22.09 0 40-17.88 40-39.97S352 0 352 0s-40 49.91-40 72S329.9 111.1 352 111.1zM224 111.1c22.09 0 40-17.88 40-39.97S224 0 224 0S184 49.91 184 72S201.9 111.1 224 111.1zM383.1 223.1L384 160c0-8.836-7.164-16-16-16h-32C327.2 144 320 151.2 320 160v64h-64V160c0-8.836-7.164-16-16-16h-32C199.2 144 192 151.2 192 160v64H128V160c0-8.836-7.164-16-16-16h-32C71.16 144 64 151.2 64 160v63.97c-35.35 0-64 28.65-64 63.1v68.7c9.814 6.102 21.39 11.33 32 11.33c20.64 0 45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C114.1 348.3 139.4 367.1 160 367.1s45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C242.1 348.3 267.4 367.1 288 367.1s45.05-19.73 52.7-27.33c6.25-6.219 16.34-6.219 22.59 0C370.1 348.3 395.4 367.1 416 367.1c10.61 0 22.19-5.227 32-11.33V287.1C448 252.6 419.3 223.1 383.1 223.1zM352 373.3c-13.75 10.95-38.03 26.66-64 26.66s-50.25-15.7-64-26.66c-13.75 10.95-38.03 26.66-64 26.66s-50.25-15.7-64-26.66c-13.75 10.95-38.03 26.66-64 26.66c-11.27 0-22.09-3.121-32-7.377v87.38C0 497.7 14.33 512 32 512h384c17.67 0 32-14.33 32-32v-87.38c-9.91 4.256-20.73 7.377-32 7.377C390 399.1 365.8 384.3 352 373.3zM96 111.1c22.09 0 40-17.88 40-39.97S96 0 96 0S56 49.91 56 72S73.91 111.1 96 111.1z' />
							</svg>
							<h1>Customer Service</h1>
							<p>concierge@lovefeste.com</p>
						</li>
					</ul>

					<div className='text'>
						<ul className='branch' ref={branch}>
							{mapInfo.map((info, idx) => {
								return (
									<li
										key={idx}
										onClick={() => {
											setIndex(idx);
										}}>
										{info.title}
									</li>
								);
							})}
						</ul>
					</div>
					<div id='map' ref={container}></div>
				</section>
			</Layout>
		</>
	);
}

export default Location;

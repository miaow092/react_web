import React, { useRef, useEffect, useState } from 'react';
import Layout from '../common/Layout';

function Location() {
	const path = process.env.PUBLIC_URL;
	const container = useRef(null);
	const { kakao } = window;

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
		window.addEventListener('resize', mapInit);
		return () => {
			window.removeEventListener('resize', mapInit);
		};
	}, [index]);

	return (
		<Layout
			name={'Location'}
			src={`${path}/img/gallery.jpeg`}
			title={'Location'}
			color={'#f4ede5'}
			des={'Come to our place!'}>
			<h1>Our Branchs</h1>
			<div id='map' ref={container}></div>
			<div className='text'>
				<ul className='branch'>
					{mapInfo.map((info, idx) => {
						return (
							<li
								key={idx}
								style={{
									backgroundImage: `url(${path}/img/branch${idx}.jpeg)`,
								}}
								onClick={() => {
									setIndex(idx);
								}}>
								{info.title}
							</li>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
}

export default Location;

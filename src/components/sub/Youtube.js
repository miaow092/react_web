import React from 'react';
import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Popup from '../common/Popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const path = process.env.PUBLIC_URL;

function Youtube() {
	const pop = useRef(null);
	const key = 'AIzaSyC6QtD-1n1UHsw8dD64nAkoS8BVKV5AV5M';
	const playListId = 'PL-Cr7h7IRk-u_Ww5bM44hhX1vkx5ctUFC';
	const num = 4;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxesRults=${num}`;

	const [items, setItems] = useState([]);
	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		axios.get(url).then((json) => {
			setItems(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout
				name={'Youtube'}
				src={`${path}/img/youtube.jpeg`}
				title={'YOUTUBE'}
				color={'#f4ede5'}
				des={'Get ready-to-party with kits that make hosting easy and fun.'}>
				<h1></h1>
				{items.map((item, idx) => {
					const desc = item.snippet.description;
					const date = item.snippet.publishedAt;

					return (
						<article
							key={idx}
							onClick={() => {
								setIndex(idx);
								pop.current.open();
							}}>
							<img src={item.snippet.thumbnails.maxres.url} />
							<a>
								<FontAwesomeIcon icon={faCirclePlay} />
							</a>
							<h2>{item.snippet.title}</h2>
							<span>{date.split('T')[0]}</span>
							<p>{desc.length > 150 ? desc.substr(0, 150) + '...' : desc}</p>
						</article>
					);
				})}
			</Layout>

			<Popup ref={pop}>
				{loading && (
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							items[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				)}
				<span onClick={() => pop.current.close()}>close</span>
			</Popup>
		</>
	);
}

export default Youtube;

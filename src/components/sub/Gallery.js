import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Popup from '../common/Popup';

const path = process.env.PUBLIC_URL;

function Gallery() {
	const key = '554ae9d07ac78ae8534bc6998305d288';
	const per_page = 30;
	const base = 'https://www.flickr.com/services/rest/?';
	const method = 'flickr.favorites.getList';
	const username = '195279368@N05';
	const url = `${base}method=${method}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&user_id=${username}`;

	const [items, setItems] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
		});
	}, []);

	return (
		<>
			<Layout
				name={'Gallery'}
				src={`${path}/img/gallery.jpeg`}
				title={'GALLERY'}
				color={'#f4ede5'}
				des={
					'Make precious party memories like a scene from a movie with Feste!'
				}>
				<ul>
					{items.map((item, idx) => {
						return (
							<li
								key={idx}
								onClick={() => {
									setOpen(true);
									setIndex(idx);
								}}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
										/>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</Layout>

			{open ? (
				<Popup setOpen={setOpen}>
					<img
						src={`https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`}
					/>
				</Popup>
			) : null}
		</>
	);
}
export default Gallery;

import Layout from '../common/Layout.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Gallery() {
	const key = '554ae9d07ac78ae8534bc6998305d288';
	const method1 = 'flickr.interestingness.getList';
	const method2 = 'flickr.photos.search';
	const num = 20;
	const url = `https://www.flickr.com/services/rest/?method=${method1}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;

	const [items, setItems] = useState([]);

	useEffect(() => {
		axios.get(url).then((json) => {
			setItems(json.data.photos.photo);
			console.log(items);
		});
	}, []);

	return (
		<Layout name={'Gallery'}>
			<div className='frame on'>
				{items.map((item, idx) => {
					return (
						<li key={idx}>
							<div className='p_inner'>
								<div className='wrap'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
										/>
										<h2>{item.title}</h2>
									</div>
								</div>
							</div>
						</li>
					);
				})}
			</div>
		</Layout>
	);
}

export default Gallery;

// import Masonry from 'react-masonry-component';
// import React, { useEffect, useState, useRef } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Layout from '../common/Layout';
// import Popup from '../common/Popup';
// import axios from 'axios';

// const path = process.env.PUBLIC_URL;

// function Gallery() {
// 	const { flickr } = useSelector((state) => state.flickrReducer);
// 	const dispatch = useDispatch();
// 	const [opt, setOpt] = useState({ type: 'interest' });

// 	//Masonry
// 	const input = useRef(null);
// 	const masonryOptions = { transitionDuration: '0.5s' };
// 	const frame = useRef(null);
// 	const [enableClick, setEnableClick] = useState(true);

// 	//팝업
// 	const [items, setItems] = useState([]);
// 	const [index, setIndex] = useState(0);
// 	const pop = useRef(null);
// 	const [loading, setLoading] = useState(true);

// 	useEffect(() => {
// 		dispatch({ type: 'FLICKR_START', opt });
// 	}, [opt]);

// 	const initGallery = () => {
// 		setOpt({ type: 'interest' });
// 		setLoading(true);
// 	};

// 	const searchTag = () => {
// 		const tag = input.current.value;
// 		setOpt({ type: 'search', tags: tag });
// 		setLoading(true);
// 	};

// 	const getFlickr = async (opt) => {
// const key = '554ae9d07ac78ae8534bc6998305d288';
// const method1 = 'flickr.interestingness.getList';
// const method2 = 'flickr.photos.search';
// const num = 20;
// let url = '';

// 		if (opt.type === 'interest') {
// 			url = `https://www.flickr.com/services/rest/?method=${method1}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
// 		}

// 		if (opt.type === 'search') {
// 			url = `https://www.flickr.com/services/rest/?method=${method2}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
// 		}

// 		await axios.get(url).then((json) => {
// 			if (json.data.photos.photo.length === 0) {
// 				alert('There are no images for this search');
// 				return;
// 			}

// 			setItems(json.data.photos.photo);
// 			setLoading(true);
// 		});

// 		setTimeout(() => {
// 			frame.current.classList.add('on');
// 			setLoading(false);
// 		}, 1000);
// 	};

// 	return (
// 		<>
// 			<Layout name={'Gallery'}>
// 				{loading ? (
// 					<img className='loading' src={path + '/img/loading.gif'} />
// 				) : null}

// 				<div className='searchBox'>
// 					<input
// 						placeholder={'Please enter a search term'}
// 						type='text'
// 						ref={input}
// 					/>
// 					<button onClick={searchTag}>search</button>
// 					<button onClick={initGallery}>gallery init</button>
// 				</div>
// 				<ul className='frame' ref={frame}>
// 					<Masonry elementType={'ul'} options={masonryOptions}>
// 						{flickr.map((item, idx) => {
// 							return (
// 								<li
// 									key={idx}
// 									onClick={() => {
// 										setIndex(idx);
// 										pop.current.open();
// 									}}>
// 									<div className='p_inner'>
// 										<div className='wrap'>
// 											<div className='pic'>
// 												<img
// 													src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
// 												/>
// 												<h2>{item.title}</h2>
// 											</div>
// 										</div>
// 									</div>
// 								</li>
// 							);
// 						})}
// 					</Masonry>
// 				</ul>
// 			</Layout>

// 			<Popup ref={pop}>
// 				{loading && (
// 					<img
// 						src={`https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`}
// 					/>
// 				)}
// 				<span onClick={() => pop.current.close()}>close</span>
// 			</Popup>
// 		</>
// 	);
// }

// export default Gallery;

import Layout from '../common/Layout.js';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Maconry from 'react-masonry-component';

function Gallery() {
	const path = process.env.PUBLIC_URL;
	const masonryOptions = {
		transitionDuration: '0.5s',
	};

	const frame = useRef(null);
	const input = useRef(null);

	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [enableClick, setEnableClick] = useState(true);

	const getFlickr = async (opt) => {
		const key = '554ae9d07ac78ae8534bc6998305d288';
		const method1 = 'flickr.interestingness.getList';
		const method2 = 'flickr.photos.search';
		const num = opt.count;
		let url = '';

		if (opt.type === 'interest') {
			url = `https://www.flickr.com/services/rest/?method=${method1}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
		}

		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method2}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
		}

		await axios.get(url).then((json) => {
			if (json.data.photos.photo.length === 0) {
				alert('No images found for this search term');
				return;
			}
			setItems(json.data.photos.photo);
		});

		setTimeout(() => {
			frame.current.classList.add('on');
			setLoading(false);

			setTimeout(() => {
				setEnableClick(true);
			}, 1000);
		}, 1000);
	};

	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result || result === '') {
			alert('Please enter a search term.');
			return;
		}

		if (enableClick) {
			setEnableClick(false);
			setLoading(true);
			frame.current.classList.remove('on');

			getFlickr({
				type: 'search',
				count: 1000,
				tags: result,
			});
			input.current.value = '';
		}
	};

	useEffect(() => {
		getFlickr({
			type: 'interest',
			count: 100,
		});
	}, []);

	return (
		<Layout name={'Gallery'} subText={'Custom Gallery'}>
			{loading ? (
				<img className='loading' src={path + '/img/loading.gif'} />
			) : null}

			<div className='searchBox'>
				<input
					placeholder={'Please enter a search term'}
					type='text'
					ref={input}
					onKeyUp={(e) => {
						if (e.key === 'Enter') showSearch();
					}}
				/>
				<button className='btnSearch' onClick={showSearch}>
					search
				</button>
			</div>

			<div className='frame' ref={frame}>
				<Maconry elementType={'div'} options={masonryOptions}>
					{items.map((item, idx) => {
						return (
							<article key={idx}>
								<div className='inner'>
									<div className='wrap'>
										<div className='pic'>
											<img
												src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
											/>
											<h2>{item.title}</h2>
										</div>
									</div>
								</div>
							</article>
						);
					})}
				</Maconry>
			</div>
		</Layout>
	);
}

export default Gallery;

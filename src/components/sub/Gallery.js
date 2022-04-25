import Masonry from 'react-masonry-component';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../common/Layout';
const path = process.env.PUBLIC_URL;

function Gallery() {
	const { flickr } = useSelector((state) => state.flickrReducer);
	const dispatch = useDispatch();
	const [opt, setOpt] = useState({ type: 'interest' });
	const input = useRef(null);
	const frame = useRef(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatch({ type: 'FLICKR_START', opt });
	}, [opt]);

	const initGallery = () => {
		setOpt({ type: 'interest' });
		setLoading(true);
	};

	const searchTag = () => {
		const tag = input.current.value;
		setOpt({ type: 'search', tags: tag });
		setLoading(true);
	};

	const [enableClick, setEnableClick] = useState(true);
	const masonryOptions = { transitionDuration: '0.5s' };

	return (
		<Layout name={'Gallery'}>
			{loading ? (
				<img className='loading' src={path + '/img/loading.gif'} />
			) : null}
			<div className='searchBox'>
				<input
					placeholder={'Please enter a search term'}
					type='text'
					ref={input}
				/>
				<button onClick={searchTag}>search</button>
				<button onClick={initGallery}>gallery init</button>
			</div>
			<ul className='frame' ref={frame}>
				<Masonry elementType={'ul'} options={masonryOptions}>
					{flickr.map((item, idx) => {
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
				</Masonry>
			</ul>
		</Layout>
	);
}

export default Gallery;

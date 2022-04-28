import { useSelector } from 'react-redux';

function Pics() {
	const { flickr } = useSelector((state) => state.flickrReducer);

	return (
		<>
			<section id='pics' className='myScroll'>
				<div className='inner'>
					<h1>Recent Gallery</h1>
					<ul>
						{flickr.map((item, idx) => {
							if (idx < 4) {
								return (
									<li key={idx}>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
										/>
										<h2>{item.title}</h2>
									</li>
								);
							}
						})}
					</ul>
				</div>
			</section>
		</>
	);
}

export default Pics;

import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Popup from '../common/Popup';

function Vids(props) {
	const vidData = useSelector((state) => state.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	function getDate(날짜문자열) {
		var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		var dayOfWeek = week[new Date(날짜문자열).getDay()];
		return dayOfWeek;
	}

	return (
		<>
			<section id='vids' className='myScroll'>
				<div className='inner'>
					<h1>Recent Youtube</h1>

					<ul className='vidList'>
						{vidData.map((vid, idx) => {
							const desc = vid.snippet.description;
							const date = vid.snippet.publishedAt;
							if (idx < 3)
								return (
									<li key={idx}>
										<div className='video'>
											<img
												onClick={() => {
													setIndex(idx);
													pop.current.open();
												}}
												src={vid.snippet.thumbnails.medium.url}
											/>
											<span>
												{date.split('T')[0]}
												<br />
												<strong>{getDate(date.split('T')[0])}</strong>
											</span>
										</div>
										<div className='text'>
											<h2>{vid.snippet.title}</h2>
											<p>
												{desc.length > 200 ? desc.substr(0, 200) + '...' : desc}
											</p>
											<span
												onClick={() => {
													setIndex(idx);
													pop.current.open();
												}}
												className='view'>
												VIEW MORE
											</span>
										</div>
									</li>
								);
						})}
					</ul>
				</div>
			</section>

			<Popup ref={pop}>
				{vidData.length !== 0 && (
					<iframe
						src={
							'https://www.youtube.com/embed/' +
							vidData[index].snippet.resourceId.videoId
						}
						frameBorder='0'></iframe>
				)}
				<span onClick={() => pop.current.close()}>close</span>
			</Popup>
		</>
	);
}

export default Vids;

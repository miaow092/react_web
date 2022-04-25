import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Popup from '../common/Popup';

function Vids(props) {
	const vidData = useSelector((state) => state.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);
	//현재 스크롤되고 있는 거리값
	const scrolled = props.scrolled;
	//해당 섹션의 세로 위치값
	const start = props.posStart;
	//스크롤 위치 보정값
	//(양수: 기준점을 위로 끌어올림, 음수: 기준점을 아래로 내림)
	const base = 300;
	//보정값을 적용한 스크롤 거리값
	const position = scrolled - start + base;

	return (
		<>
			<section id='vids' className='myScroll'>
				<div className='inner'>
					<h1>Recent Youtube</h1>

					<ul className='vidList'>
						{vidData.map((vid, idx) => {
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
											<span>{vid.snippet.publishedAt}</span>
										</div>
										<div className='text'>
											<h2>{vid.snippet.title}</h2>
											<p>{vid.snippet.description}</p>
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

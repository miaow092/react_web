import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../common/Layout';
import Popup from '../common/Popup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const path = process.env.PUBLIC_URL;

function Youtube() {
	//해당 컴포넌트 함수 호출시 store로부터 youtube데이터를 useSelector로 가져옴
	const vidData = useSelector((state) => state.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<>
			<Layout
				name={'Youtube'}
				src={`${path}/img/youtube.jpeg`}
				title={'YOUTUBE'}
				color={'#f4ede5'}
				des={'Get ready-to-party with kits that make hosting easy and fun.'}>
				<h1></h1>
				{vidData.map((item, idx) => {
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

export default Youtube;

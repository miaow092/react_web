import { useState, useEffect } from 'react';
import Layout from '../common/Layout';
const path = process.env.PUBLIC_URL;

function Content() {
	const getLocalData = () => {
		const data = localStorage.getItem('posts');

		const dummyData = [
			{ title: 'Hello5', content: 'Here comes description in detail.' },
			{ title: 'Hello4', content: 'Here comes description in detail.' },
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
		];

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyData;
		}
	};

	const [posts] = useState(getLocalData);

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, []);

	return (
		<section id='news' className='myScroll'>
			<div className='inner'>
				<h1>Recent Community</h1>
				<img className='pic' src={`${path}/img/sub1.jpeg`} />
				<ul>
					{posts.map((post, idx) => {
						if (idx < 4) {
							return (
								<li key={idx}>
									<h2>{post.title}</h2>
									<p>{post.content}</p>
								</li>
							);
						}
					})}
				</ul>
			</div>
		</section>
	);
}

export default Content;

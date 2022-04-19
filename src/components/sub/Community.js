import { useEffect, useState, useRef } from 'react';
import Layout from '../common/Layout';

function Account() {
	//qureyselect같은 것. 지정해줄 가상 dom의 위치를 정해줄 수 있는 변수
	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);

	const getlocalData = () => {
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

	const [posts, setposts] = useState(getlocalData);

	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};
	const cratePost = () => {
		const inputVal = input.current.value.trim();
		const textareaVal = textarea.current.value.trim();

		if (!inputVal || !textareaVal) {
			alert('asdf');
			return;
		}

		setposts([{ title: inputVal, content: textareaVal }, ...posts]);
		resetPost();
	};
	const deletePoset = (index) => {
		setposts(posts.filter((_, idx) => idx !== index));
	};
	const disableUpdate = (index) => {
		setposts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};
	const updatePost = (index) => {
		const inputVal = editInput.current.value.trim();
		const textareaVal = editTextarea.current.value.trim();

		{
			if (!inputVal || !textareaVal) {
				alert('asdf');
				return;
			}
		}

		setposts(
			posts.map((post, idx) => {
				if (idx === index) {
					post.title = editInput.current.value;
					post.content = editTextarea.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};
	const enableUpdate = (index) => {
		setposts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	useEffect(() => {
		localStorage.setItem('posts', JSON.stringify(posts));
	}, [posts]);

	return (
		<Layout name={'Community'}>
			<div class='content_sub_cs'>
				<div class='inner'>
					<h1>Customer Service</h1>
					<div class='cs'>
						<div class='call'>
							<div class='text'>
								<p>telephone connection</p>
								<a href='#'>MORE</a>
							</div>
							<div class='icon'>
								<a href='#'>
									<i class='fa-solid fa-phone-volume'></i>
								</a>
							</div>
						</div>
						<div class='inquiry'>
							<div class='text'>
								<p>1:1 inquiry</p>
								<a href='#'>MORE</a>
							</div>
							<div class='icon'>
								<i class='fa-solid fa-message'></i>
							</div>
						</div>
						<div class='kakao'>
							<div class='text'>
								<p>Kakao Talk counseling</p>
								<a href='#'>MORE</a>
							</div>
							<div class='icon'>
								<i class='fa-solid fa-comment-dots'></i>
							</div>
						</div>
					</div>
					<p>consultation time AM 10:00 - PM 17:00</p>
					<p>lunch break AM 12:00 - PM 13:00</p>
				</div>
			</div>

			<div class='content_sub_tab'>
				<div class='inner'>
					<div class='wrap'>
						<div class='img'>
							<img src='img/error.jpeg' />
						</div>
						<div class='tab'>
							<div class='community_search'>
								<div className='inputBox'>
									<input type='text' placeholder='your name' ref={input} />
									<textarea
										cols='30'
										rows='10'
										placeholder='Pleace enter yout comments'
										ref={textarea}></textarea>
									<button onClick={resetPost}>cancel</button>
									<button onClick={cratePost}>creat</button>
								</div>

								{/* <div class="search_bar">
                                <p>FAQ SEARCH</p>
                                <div class="bar"></div>
                            </div> */}
							</div>
							<div class='community_tab'>
								<h1>Community</h1>
								<ul class='nav'>
									<li class='on'>
										<a href='#'>Q&A</a>
									</li>
									<li>
										<a href='#'>payment</a>
									</li>
									<li>
										<a href='#'>exchange</a>
									</li>
									<li>
										<a href='#'>shopping</a>
									</li>
								</ul>

								<article>
									<div class='on'>tab1</div>
									<div>tab2</div>
									<div>tab3</div>
									<div>tab4</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Account;

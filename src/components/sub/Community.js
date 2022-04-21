import { useEffect, useState, useRef } from 'react';
import Layout from '../common/Layout';

const path = process.env.PUBLIC_URL;

function Community() {
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
	const deletePost = (index) => {
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
			<div className='content_sub_cs'>
				<h1>Customer Service</h1>
				<div className='cs'>
					<div className='call'>
						<div className='text'>
							<p>telephone connection</p>
							<a href='#'>MORE</a>
						</div>
						<div className='icon'>
							<a href='#'>
								<i className='fa-solid fa-phone-volume'></i>
							</a>
						</div>
					</div>
					<div className='inquiry'>
						<div className='text'>
							<p>1:1 inquiry</p>
							<a href='#'>MORE</a>
						</div>
						<div className='icon'>
							<i className='fa-solid fa-message'></i>
						</div>
					</div>
					<div className='kakao'>
						<div className='text'>
							<p>Kakao Talk counseling</p>
							<a href='#'>MORE</a>
						</div>
						<div className='icon'>
							<i className='fa-solid fa-comment-dots'></i>
						</div>
					</div>
				</div>
				<p>consultation time AM 10:00 - PM 17:00</p>
				<p>lunch break AM 12:00 - PM 13:00</p>
			</div>

			<div className='content_sub_tab'>
				<div className='wrap'>
					<div className='img'>
						<img src={`${path}/img/error.jpeg`} />
					</div>
					<div className='tab'>
						<div className='community_search'>
							<div className='input'>
								<input type='text' placeholder='title' ref={input} />
								<textarea
									cols='30'
									rows='10'
									placeholder='Pleace enter yout comments'
									ref={textarea}></textarea>
							</div>
							<div className='button'>
								<button onClick={resetPost}>cancel</button>
								<button onClick={cratePost}>creat</button>
							</div>
						</div>
						<div className='community_tab'>
							<h1>Community</h1>
							<nav>
								<ul className='nav'>
									<li className='on'>
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
							</nav>

							<section>
								<article className='on'>
									{posts.map((post, idx) => {
										let con = post.content.split('\n');

										return (
											<article key={idx} className='line'>
												{post.enableUpdate ? (
													<>
														<input
															type='text'
															defaultValue={post.title}
															ref={editInput}
														/>
														<br />
														<textarea
															defaultValue={post.content}
															ref={editTextarea}></textarea>

														<div className='btns'>
															<button onClick={() => disableUpdate(idx)}>
																cancel
															</button>
															<button onClick={() => updatePost(idx)}>
																save
															</button>
														</div>
													</>
												) : (
													<>
														<h2>{post.title}</h2>
														<div>
															{con.map((txt, idx) => {
																return <p key={idx}>{txt}</p>;
															})}
														</div>
														<div className='btns'>
															<button onClick={() => enableUpdate(idx)}>
																edit
															</button>
															<button onClick={() => deletePost(idx)}>
																delete
															</button>
														</div>
													</>
												)}
											</article>
										);
									})}
								</article>
								<article>tab2</article>
								<article>tab3</article>
								<article>tab4</article>
							</section>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Community;

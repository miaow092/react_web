import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

const path = process.env.PUBLIC_URL;

function Join() {
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		comments: '',
		edu: '',
		gender: null,
		interest: null,
	};
	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});
	const [success, setSuccess] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);

	const check = (val) => {
		console.log('check');
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()(_+)]/;

		if (val.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		if (
			val.pwd1 < 5 ||
			!eng.test(val.pwd1) ||
			!num.test(val.pwd1) ||
			!spc.test(val.pwd1)
		) {
			errs.pwd1 =
				'비밀번호는 5글자 이상, 문자, 숫자, 특수문자를 모두 포함하세요';
		}
		if (val.pwd1 !== val.pwd2 || !val.pwd2) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요.';
		}
		if (val.email < 5 || !/@/.test(val.email)) {
			errs.email = '이메일은 5글자이상 @입력하세요';
		}
		if (!val.gender) {
			errs.gender = '성별을 선택하세요';
		}
		if (!val.interests) {
			errs.interests = '관심사를 하나이상 선택하세요.';
		}

		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};

	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');
		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});

		setVal({ ...val, [name]: isCheck });
	};

	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...val, [name]: isCheck });
	};

	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.options[e.target.selectedIndex].value;
		setVal({ ...val, [name]: isSelected });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
	};

	const handleReset = () => {
		setVal(initVal);
		setErr({});
		setIsSubmit(false);
	};

	useEffect(() => {
		const len = Object.keys(err).length;

		if (len === 0 && isSubmit) {
			setSuccess(true);
		} else {
			setSuccess(false);
		}
	}, [err]);

	useEffect(() => {
		handleReset();
	}, [success]);

	return (
		<Layout name={'Join'} title={'Join'} des={'aout sintek fnatastic'}>
			{success ? <h2>회원가입을 축하합니다.</h2> : null}
			<div className='wrap'>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend className='h'> 회원 가입 양식</legend>
						<h1>
							<label htmlFor='terms'>Check out the terms and conditions.</label>
						</h1>
						<textarea
							name='terms'
							id='terms'
							cols='30'
							rows='10'
							onChange={handleChange}
							defaultValue={val.tetms}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
							perferendis voluptates extionem error saepe qui quia esse
							recusandae vero voluptatem neque dolorum ab voluptas asperiores
							laboriosam iste officiis, eveniet suscipit animi? Quo suscipit
							corporis est perferendis dolor laborum magni ducimus rerum saepe
							totam ad tenetur assumenda veniam deleniti repudiandae, molestiae
							dolorem sit modi. Obcaecati, quo excepturi rerum, facilis et omnis
							aspernatur commodi earum doloremque impedit dolorum. Repellat
							voluptates reiciendis natus odio, laboriosam, nihil sapiente
							suscipit, ex harum cum obcaecati provident? Iure sapiente minima
							inventore, quas officia quis saepe, dolore deleniti ea omnis est,
							ad incidunt corporis totam ipsa ullam deserunt. Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Libero laudantium vitae
							laboriosam architecto voluptas quibusdam, sit iusto? Ullam, maxime
							atque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</textarea>
						<div className='agreement'>
							<input type='checkbox' name='agree' id='agree' />
							<label htmlFor='agree'>I agree to the terms and conditions</label>
						</div>

						<table>
							<caption className='h'>회원가입 정보</caption>
							<tbody>
								{/* userid */}
								<tr>
									<th>
										<label htmlFor='userid'>ID</label>
									</th>
									<td>
										<input
											type='text'
											id='userid'
											name='userid'
											placeholder='Please enter your ID'
											value={val.userid}
											onChange={handleChange}
										/>
									</td>
									<span className='err'>{err.userid}</span>
								</tr>

								{/* password */}
								<tr>
									<th>
										<label htmlFor='pwd1'>PASSWORD</label>
									</th>
									<td>
										<input
											type='password'
											name='pwd1'
											id='pwd1'
											placeholder='비밀번호를 입력하세요'
											value={val.pwd1}
											onChange={handleChange}
										/>
									</td>
									<span className='err'>{err.pwd1}</span>
								</tr>

								<tr>
									<th>
										<label htmlFor='pwd2'>RE-PASSWORD</label>
									</th>
									<td>
										<input
											type='password'
											name='pwd2'
											id='pwd2'
											placeholder='비밀번호를 재입력하세요'
											value={val.pwd2}
											onChange={handleChange}
										/>
									</td>
									<span className='err'>{err.pwd2}</span>
								</tr>

								{/* email */}
								<tr>
									<th>
										<label htmlFor='email'>E-MAIL</label>
									</th>
									<td>
										<input
											type='text'
											name='email'
											id='email'
											placeholder='이메일 주소를 입력하세요.'
											value={val.email}
											onChange={handleChange}
										/>
									</td>
									<span className='err'>{err.email}</span>
								</tr>

								{/* gender */}
								<tr>
									<th>GENDER</th>
									<td>
										<label htmlFor='male'>Male</label>
										<input
											type='radio'
											id='male'
											name='gender'
											onChange={handleRadio}
										/>

										<label htmlFor='female'>Female</label>
										<input
											type='radio'
											id='female'
											name='gender'
											onChange={handleRadio}
										/>
									</td>
									<span className='err'>{err.gender}</span>
								</tr>

								{/* 좋아하는 악세사리 */}
								<tr>
									<th>INTERESTS</th>
									<td>
										<label htmlFor='earings'>Earings</label>

										<input
											type='checkbox'
											name='interests'
											id='earings'
											onChange={handleCheck}
										/>

										<label htmlFor='rings'>Rings</label>
										<input
											type='checkbox'
											name='interests'
											id='rings'
											onChange={handleCheck}
										/>

										<label htmlFor='neck'>Neck</label>

										<input
											type='checkbox'
											name='interests'
											id='neck'
											onChange={handleCheck}
										/>
									</td>
									<span className='err'>{err.interests}</span>
								</tr>
								{/* comments */}
								<tr>
									<th>
										<label htmlFor='comments'>LEAVE COMMENTS</label>
									</th>
									<td>
										<textarea
											name='comments'
											id='comments'
											cols='30'
											rows='10'
											value={val.comments}
											onChange={handleChange}></textarea>
										<span className='err'>{err.comments}</span>
									</td>
								</tr>
								{/* btnSet */}
								<tr>
									<th colSpan='2'>
										<input type='reset' value='CANCEL' onClick={handleReset} />
										<input
											type='submit'
											value='SEND'
											onClick={() => {
												setIsSubmit(true);
											}}
										/>
									</th>
								</tr>
							</tbody>
						</table>
					</fieldset>
				</form>

				<div className='pic'>
					<img src={`${path}/img/error.jpeg`} />
				</div>
			</div>

			{/* <div className='pic'>
					{success ? (
						<div className='successTxt'>
							<h3>THANK YOU FOR JOIN US</h3>
							<img src={`${path}/img/join_img2.jpg`} />
						</div>
					) : null}
					<img src={`${path}/img/join_img1.jpg`} />
				</div> */}

			{/*
							<table>
								<caption className='hidden'>CREATE ACCOUNT FORM TABLE</caption>
								<tbody>
									<tr>
										<th>
											<label htmlFor='userid'>USER ID</label>
										</th>
										<td>
											<input
												type='text'
												name='userid'
												id='userid'
												placeholder='ID'
												value={val.userid}
												onChange={handleChange}
											/>
											<span className='err'>{err.userid}</span>
										</td>
									</tr>
									<tr>
										<th>
											<label htmlFor='pwd1'>PASSWORD</label>
										</th>
										<td>
											<input
												type='password'
												name='pwd1'
												id='pwd1'
												placeholder='Password'
												value={val.pwd1}
												onChange={handleChange}
											/>
											<span className='err'>{err.pwd1}</span>
										</td>
									</tr>
									<tr>
										<th>
											<label htmlFor='pwd2'>RE-PASSWORD</label>
										</th>
										<td>
											<input
												type='password'
												name='pwd2'
												id='pwd2'
												placeholder='Re-Password'
												value={val.pwd2}
												onChange={handleChange}
											/>
											<span className='err'>{err.pwd2}</span>
										</td>
									</tr>
									<tr>
										<th>
											<label htmlFor='email'>E-MAIL</label>
										</th>
										<td>
											<input
												type='text'
												name='email'
												id='email'
												placeholder='E-Mail'
												value={val.email}
												onChange={handleChange}
											/>
											<span className='err'>{err.email}</span>
										</td>
									</tr>
									<tr>
										<th>GENDER</th>
										<td>
											<label htmlFor='male'>
												<input
													type='radio'
													name='gender'
													id='male'
													onChange={handleRadio}
												/>
												MALE
											</label>
											<label htmlFor='female'>
												<input
													type='radio'
													name='gender'
													id='female'
													onChange={handleRadio}
												/>
												FEMALE
											</label>
											<span className='err'>{err.gender}</span>
										</td>
									</tr>
									<tr>
										<th>INTERESTS</th>
										<td>
											<label htmlFor='clothes'>
												<input
													type='checkbox'
													name='interests'
													id='clothes'
													onChange={handleCheck}
												/>
												CLOTHES
											</label>
											<label htmlFor='bag'>
												<input
													type='checkbox'
													name='interests'
													id='bag'
													onChange={handleCheck}
												/>
												BAG
											</label>
											<label htmlFor='jewelry'>
												<input
													type='checkbox'
													name='interests'
													id='jewelry'
													onChange={handleCheck}
												/>
												JEWELRY
											</label>
											<label htmlFor='shoes'>
												<input
													type='checkbox'
													name='interests'
													id='shoes'
													onChange={handleCheck}
												/>
												SHOES
											</label>
											<label htmlFor='beauty'>
												<input
													type='checkbox'
													name='interests'
													id='beauty'
													onChange={handleCheck}
												/>
												BEAUTY
											</label>
											<label htmlFor='deco'>
												<input
													type='checkbox'
													name='interests'
													id='deco'
													onChange={handleCheck}
												/>
												DECO
											</label>
											<span className='err'>{err.interests}</span>
										</td>
									</tr>
									<tr>
										<th>
											<label htmlFor='route'>JOIN ROUTE</label>
										</th>
										<td>
											<select name='route' id='route' onChange={handleSelect}>
												<option value=''>Choose One</option>
												<option value='routeSearch'>SEARCH</option>
												<option value='routeSns'>SNS</option>
												<option value='routeTv'>TV</option>
												<option value='routeFriend'>FRIEDN</option>
												<option value='routeStore'>STORE</option>
												<option value='routeEtc'>ETC</option>
											</select>
											<span className='err'>{err.route}</span>
										</td>
									</tr>
									<tr>
										<th>
											<label htmlFor='comments'>COMMENTS</label>
										</th>
										<td>
											<textarea
												name='comments'
												id='comments'
												cols='30'
												rows='10'
												spellCheck='false'
												placeholder='Write Your Message'
												value={val.comments}
												onChange={handleChange}></textarea>
											<span className='err'>{err.comments}</span>
										</td>
									</tr>
									<tr>
										<th colSpan='2'>
											<input
												type='reset'
												value='CANCEL'
												onClick={handleReset}
											/>
											<input
												type='submit'
												value='SEND'
												onClick={() => {
													setIsSubmit(true);
												}}
											/>
										</th>
									</tr>
								</tbody>
							</table>
						</fieldset>
					</form>
				</div>
			</div> */}
		</Layout>
	);
}

export default Join;

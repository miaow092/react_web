import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

const path = process.env.PUBLIC_URL;

function Join() {
	const initVal = {
		userid: '',
	};
	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});

	const check = (val) => {
		const errs = {};
		if (val.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}

		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
	};

	useEffect(() => {
		console.log(err);
	}, [err]);

	return (
		<Layout name={'Join'}>
			<div className='wrap'>
				<form action='result.html' method='get' id='join'>
					<fieldset>
						<legend className='h'> 회원 가입 양식</legend>
						<h1>
							<label for='terms'>Check out the terms and conditions.</label>
						</h1>
						<textarea name='terms' id='terms' cols='30' rows='10'>
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
							<label for='agree'>I agree to the terms and conditions</label>
						</div>

						<table className='t_name'>
							<caption className='h'>이름 입력 테이블</caption>
							<thead>
								<tr>
									<th scope='col'>
										<label for='name'>NAME</label>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input
											type='text'
											name='name'
											id='name'
											placeholder='Please enter your name'
										/>
									</td>
								</tr>
							</tbody>
						</table>

						<table className='t_id'>
							<caption className='h'>아이디 입력 테이블</caption>
							<thead>
								<tr>
									<th scope='col'>
										<label for='id'>ID</label>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input
											type='text'
											name='id'
											id='id'
											placeholder='Please enter your ID'
										/>
									</td>
								</tr>
							</tbody>
						</table>

						<table className='t_password'>
							<caption className='h'>비밀번호 입력 테이블</caption>
							<thead>
								<tr>
									<th scope='col'>
										<label for='password'>PASSWORD</label>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input
											type='password'
											name='password'
											id='password'
											placeholder='Please enter your password'
										/>
									</td>
								</tr>
							</tbody>
						</table>

						<table className='t_repassword'>
							<caption className='h'>비밀번호 재입력 테이블</caption>
							<thead>
								<tr>
									<th scope='col'>
										<label for='re  password'>RE-PASSWORD</label>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input
											type='password'
											name='repassword'
											id='repassword'
											placeholder='Please re-enter your password'
										/>
									</td>
								</tr>
							</tbody>
						</table>

						<table>
							<caption className='h'>메일 입력 테이블</caption>
							<thead>
								<tr>
									<th scope='col'>
										<label for='text'>E-MAIL</label>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input
											type='text'
											name='email'
											id='email'
											placeholder='Please enter your e-mail'
										/>
									</td>
								</tr>
							</tbody>
						</table>

						<table>
							<caption className='h'>휴대전화 입력 테이블</caption>
							<thead>
								<tr>
									<th scope='col'>
										<label for='ph'>PHONE NUMBER</label>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input
											type='text'
											name='ph'
											id='ph'
											placeholder='Please enter your phone number'
										/>
									</td>
								</tr>
							</tbody>
						</table>

						<input type='reset' value='CANCEL' />
						<input type='submit' value='SUBMIT' />
					</fieldset>
				</form>

				<div className='pic'>
					<img src={`${path}/img/error.jpeg`} />
				</div>
			</div>
		</Layout>
	);
}

export default Join;

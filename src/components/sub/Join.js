import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

const path = process.env.PUBLIC_URL;

function Join() {
	const initVal = {
		userid: '',
	};
	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});

	//순서4 - 인수로 state val값을 전달
	const check = (val) => {
		//내부적으로 빈 에러 객체를 생성
		const errs = {};
		//입력한 val의 값중 유저아이디값 글자갯수가 5보다 적으면
		if (val.userid.length < 5) {
			//빈 에러객체에 userid키값 만들어서 에러메세지 등록
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}

		//만약 에러상황이 아니면 조건문이 무시되면서
		//빈 에러객체를 반환하고
		//만약 에러상황이면  조건문이 실행되면서
		//에러메세지가 담긴 에러객체 반환
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};

	//순서2 - 해당함수가 호출
	const handleSubmit = (e) => {
		e.preventDefault();
		//순서3 - 현재 val의 값을 check함수의 인수로 전달
		setErr(check(val));
		//순서5 - 반환된 결과값의 에러객체가
		//setErr함수에 의해서 err스테이트에 전달
	};

	//순서6 - err스테이트가 의존성에 등록되어 있으므로
	//err 값이 변경될떄마다 콘솔문 출력
	useEffect(() => {
		console.log(err);
	}, [err]);

	return (
		<Layout name={'Join'}>
			{/* 순서1- 전송버튼 눌러서 submit이벤트 발생시 handleSubmit호출 */}
			<div class='wrap'>
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

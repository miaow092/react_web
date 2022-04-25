import Layout from '../common/Layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const path = process.env.PUBLIC_URL;

function About() {
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/member.json`).then((json) => {
			setMembers(json.data.data);
		});
	}, []);

	return (
		<Layout
			name={'About'}
			title={'ABOUT WILD FAWN'}
			des={'aout sintek fnatastic'}>
			<section id='about'>
				<div className='wrap'>
					<article className='text'>
						<h1>About Us</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui
							tenetur repudiandae vitae quidem, ipsa quaerat esse nihil
							excepturi quod ratione minima natus eligendi voluptatibus digniss
							imos. Sapiente vel corporis repellendus ducimus cupiditate optio
							veniam, inventore consequatur quo modi cum necessitatibus?
						</p>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Reiciendis, magni? Mollitia non, itaque placeat quo dolorum velit
							deleniti vero perspiciatis enim eos id nostrum cum numquam. Rem
							tempora excepturi est id minima voluptatem laboriosam error!
						</p>
					</article>
					<article className='pic'>
						<img src={`${path}/img/about.jpeg`} />
					</article>
				</div>
			</section>

			<section id='collaboration'>
				<div className='wrap'>
					<article className='pic'>
						<img src={`${path}/img/collavo.jpeg`} />
					</article>
					<article className='text'>
						<h1>
							Wild Fawn x Mira Lou
							<br />
							Collaboration
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
							fugiat eaque dolor voluptatem, cupiditate nobis aspernatur ratione
							eius voluptatum harum corrupti odio consequatur, tempore ullam
							maiores iure ex at? Molestias.
						</p>
					</article>
				</div>
			</section>

			<section id='member'>
				<div className='memberList'>
					<ul>
						<h1>Meet Ours Hosts</h1>
						{members.map((member, idx) => {
							return (
								<div className='wrap'>
									<li key={idx}>
										<img src={`${path}/img/${member.pic}`} />
										<h2>{member.name}</h2>
										<p>{member.position}</p>
									</li>
								</div>
							);
						})}
					</ul>
				</div>
			</section>
		</Layout>
	);
}

export default About;

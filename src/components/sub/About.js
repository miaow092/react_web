import Layout from '../common/Layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const path = process.env.PUBLIC_URL;

function About() {
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/member.json`).then((json) => {
			console.log(json.data.data);
			setMembers(json.data.data);
		});
	}, []);

	return (
		<Layout>
			<section className='members'>
				<ul className='memberList'>
					<h1>Meet Your Hosts</h1>
					{members.map((member, idx) => {
						return (
							<div className='member' key={idx}>
								<div className='pic'>
									<img src={`${path}/img/${member.pic}`} />
								</div>
								<h2>{member.name}</h2>
								<p>{member.position}</p>
							</div>
						);
					})}
				</ul>
			</section>
		</Layout>
	);
}

export default About;

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
		<Layout
			name={'About'}
			src={`${path}/img/about_main.jpg`}
			title={'ABOUT FESTE'}
			color={'#f4ede5'}
			des={'Let me introduce you to the festival'}>
			<section className='introduce'>
				<div className='box'>
					<div className='pic'>
						<img src={`${path}/img/about1.jpeg`} />
					</div>

					<div className='text1'>
						<h1>Parties? Fun. Planning them? Not so much.</h1>
						<p>
							We started Feste as a love letter to our friends and a celebration
							of our time spent together. We want to bring the joy, ease, and je
							ne sais quoi of great hosting to all our guests, because getting
							together should be fun.
						</p>
					</div>
				</div>

				<h1>
					<span>WHO WE ARE</span>Feste is a new lifestyle brand, dedicated to
					celebrating moments big and small.
				</h1>
				<p>
					With an entirely new approach to gathering, our shops and
					lovefeste.com will help our guests do more than set a beautiful table.
					Because for us, it’s about the feeling, the attitude, the vibe. It’s
					all about setting the scene. We help create that multisensory je ne
					sais quoi, from what’s in the glass to the rules of the game, through
					curated kits, à la carte supplies, found vintage wares, and
					hand-picked local vendors. And with a family of great hosts at the
					heart of the brand, we’re always eager to lend a helping hand.
				</p>
			</section>

			<section className='introduce2'>
				<div className='mission'>
					<div className='wrap'>
						<div className='pic'>
							<img src={`${path}/img/about2.png`} />
						</div>
						<div className='text2'>
							<span>OUR MISSION</span>
							<h2>
								Our mission is to inspire people to gather. No occasion
								necessary.
							</h2>
						</div>
					</div>
				</div>

				<div className='vision'>
					<div className='wrap'>
						<div className='text3'>
							<span>OUR VISION</span>
							<h2>
								Our vision is to be the essential resource for the modern host.
							</h2>
						</div>
						<div className='pic'>
							<img src={`${path}/img/about3.png`} />
						</div>
					</div>
				</div>
			</section>

			<section className='member'></section>
		</Layout>
	);
}

export default About;

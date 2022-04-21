//main
import Header from '../common/Header';
import Visual from './Visual';
import Content from './Content';
import Vids from './Vids';
import Pics from './Pics';
import Categories from './Categories';
import Btns from './Btns';
import Anime from '../../class/anim.js';

import { useRef, useEffect, useState } from 'react';
const path = process.env.PUBLICK_URL;

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [index, setIndex] = useState(0);

	const getPos = () => {
		const secs = main.current.querySelectorAll('.myScroll');
		pos.current = [];
		for (const sec of secs) pos.current.push(sec.offsetTop);
	};

	const activation = () => {
		const base = -200;
		let scroll = window.scrollY;
		const btns = main.current.querySelectorAll('.btns li');

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				btns[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[index],
			duration: 500,
		});
	}, [index]);

	return (
		<main ref={main}>
			<Header />
			<Visual />
			<Content />
			<Vids />
			<Pics />
			<Categories />
			<Btns setIndex={setIndex} />
		</main>
	);
}

export default Main;
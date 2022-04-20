import React from 'react';

const path = process.env.PUBLIC_URL;

function Pics() {
	return (
		<section id='pics' className='myScroll'>
			<div className='pics_inner'>
				<h1>Our Favorites</h1>
				<div className='wrap'>
					<article className='favItem'>
						<img src={`${path}/img/fav1.jpeg`} />
						<h2>ring earrings with pearls</h2>
						<p>$41.49</p>
					</article>
					<article className='favItem'>
						<img src={`${path}/img/fav2.jpeg`} />
						<h2>chain gold necklace with pearls</h2>
						<p>$205.49</p>
					</article>
					<article className='favItem'>
						<img src={`${path}/img/fav3.jpeg`} />
						<h2>golden Eternity Ring</h2>
						<p>$41.49</p>
					</article>
				</div>
				<a href='#'>See All</a>
			</div>
		</section>
	);
}

export default Pics;

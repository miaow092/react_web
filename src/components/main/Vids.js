import React from 'react';

const path = process.env.PUBLIC_URL;

function Vids() {
	return (
		<section id='vids' className='myScroll'>
			<div className='inner'>
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
						<a href='#'>Explore</a>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Vids;

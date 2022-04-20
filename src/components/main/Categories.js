import React from 'react';

const path = process.env.PUBLIC_URL;

function Categories() {
	return (
		<section id='about'>
			<div className='inner'>
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
						<p className='secend'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Reiciendis, magni? Mollitia non, itaque placeat quo dolorum velit
							deleniti vero perspiciatis enim eos id nostrum cum numquam. Rem
							tempora excepturi est id minima voluptatem laboriosam error!
						</p>
						<a href='about.html'>More</a>
					</article>
					<article className='pic'>
						<img src={`${path}/img/about.jpeg`} />
					</article>
				</div>
			</div>
		</section>
	);
}

export default Categories;

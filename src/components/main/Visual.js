import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const path = process.env.PUBLIC_URL;

function Visual() {
	return (
		<figure id='visual'>
			<Swiper
				effect={'coverflow'}
				spaceBetween={40}
				grabCursor={true}
				pagination={true}
				navigation={true}
				loop={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				speed={700}
				coverflowEffect={{
					rotate: 0,
					stretch: -1000,
					depth: 800,
					modifier: 1,
					slideShadows: false,
				}}
				modules={[EffectCoverflow, Pagination, Navigation]}
				className='mySwiper'>
				<SwiperSlide>
					<img src={`${path}/img/main_c1.jpeg`} />
					<div className='text'>
						<h1>
							Nadiia for
							<br /> WILD FAWN
						</h1>
					</div>
					<div className='back'></div>
					<div className='des'>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
							molestias doloremque ipsum? Minus et non aliquid libero quas
							excepturi magnam, voluptas deleniti assumenda.
							<br />
							<a href='#'>Watch more</a>
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/main_c10.jpeg`} />
					<div className='text'>
						<h1>
							Nadiia for
							<br /> WILD FAWN
						</h1>
					</div>
					<div className='back'></div>
					<div className='des'>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
							molestias doloremque ipsum? Minus et non aliquid libero quas
							excepturi magnam, voluptas deleniti assumenda.
							<br />
							<a href='#'>Watch more</a>
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/main_c3.jpeg`} />
					<div className='text'>
						<h1>
							Nadiia for
							<br /> WILD FAWN
						</h1>
					</div>
					<div className='back'></div>
					<div className='des'>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
							molestias doloremque ipsum? Minus et non aliquid libero quas
							excepturi magnam, voluptas deleniti assumenda.
							<br />
							<a href='#'>Watch more</a>
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/main_c8.jpeg`} />
					<div className='text'>
						<h1>
							Nadiia for
							<br /> WILD FAWN
						</h1>
					</div>
					<div className='back'></div>
					<div className='des'>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
							molestias doloremque ipsum? Minus et non aliquid libero quas
							excepturi magnam, voluptas deleniti assumenda.
							<br />
							<a href='#'>Watch more</a>
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/main_c9.jpeg`} />
					<div className='text'>
						<h1>
							Nadiia for
							<br /> WILD FAWN
						</h1>
					</div>
					<div className='back'></div>
					<div className='des'>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
							molestias doloremque ipsum? Minus et non aliquid libero quas
							excepturi magnam, voluptas deleniti assumenda.
							<br />
							<a href='#'>Watch more</a>
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</figure>
	);
}

export default Visual;

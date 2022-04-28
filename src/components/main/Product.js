const path = process.env.PUBLIC_URL;
function Product(props) {
	const scrolled = props.scrolled;
	const start = props.posStart;
	const base = 100;
	const position = scrolled - start + base;

	return (
		<section id='Product' className='myScroll'>
			<div className='inner'>
				<h1
					style={
						position >= 0 ? { transform: `translateY(${position}px)` } : null
					}>
					Most Popular Product
				</h1>
			</div>
			<div
				className='pic1'
				style={
					position >= 0 ? { transform: `translateX(${position}px)` } : null
				}>
				<img src={`${path}/img/main_p1.jpeg`} />
			</div>
			<div className='pic2'>
				<img src={`${path}/img/main_p.jpeg`} />
			</div>
			<div
				className='pic3'
				style={
					position >= 0
						? { transform: `translateX(${-position * 0.8}px)` }
						: null
				}>
				<img src={`${path}/img/main_p4.jpeg`} />
			</div>

			{/* <h2
				style={
					position >= 0 ? { transform: `translateX(${position}px)` } : null
				}>
				Recent Youtube
			</h2>

			<h2
				style={
					position >= 0 ? { transform: `translateX(${position * 2}px)` } : null
				}>
				2배 느리게 이동
			</h2> */}
		</section>
	);
}

export default Product;

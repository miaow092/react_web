import React from 'react';

function Footer() {
	return (
		<footer id='footer'>
			<div className='inner'>
				<div className='wrap'>
					<div className='first'>
						<ul>
							<li>Jewellery</li>
							<li>Rings</li>
							<li>Earrings</li>
							<li>Necklaces</li>
							<li>Bracelets</li>
						</ul>
						<ul>
							<li>General</li>
							<li>About</li>
							<li>Shopping</li>
							<li>Terms & Conditions</li>
							<li>Privacy Policy</li>
						</ul>
					</div>
					<div className='second'>
						<div className='email'>
							<p>Contact Us</p>
							<span>say.hello@wildfawn.com</span>
						</div>
						<div className='sns'>
							<p>Folloow Us</p>
							<ul>
								<li>Instagram</li>
								<li>Facebook</li>
							</ul>
						</div>
					</div>
					<form>
						<p> Sign up for our newsletter and get a 10% discount </p>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Your email'
						/>
						<input type='button' value='submit' />
					</form>
				</div>
				<span>&copy 2022 WILD Fawn. All right resrved.</span>
			</div>
		</footer>
	);
}

export default Footer;

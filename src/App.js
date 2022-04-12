import { Route } from 'react-router-dom';
import './scss/style.scss';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Visual from './components/main/Visual';
import Content from './components/main/Content';

import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import About from './components/sub/About';
import Account from './components/sub/Account';
import ContactUs from './components/sub/ContactUs';
import Join from './components/sub/Join';
import Shop from './components/sub/Shop';

function App() {
	return (
		<>
			<Route path='/'>
				<Header />
				<Visual />
				<Content />
			</Route>

			<Route path='/youtube' component={Youtube} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/about' component={About} />
			<Route path='/account' component={Account} />
			<Route path='/contactUs' component={ContactUs} />
			<Route path='/join' component={Join} />
			<Route path='/shop' component={Shop} />

			<Footer />
		</>
	);
}

export default App;

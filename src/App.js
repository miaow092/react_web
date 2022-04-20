import { Route, Switch } from 'react-router-dom';
import { motion } from 'framer-motion';
import './scss/style.scss';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Popup from './components/common/Popup';

import Main from './components/main/Main';

//sub
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import About from './components/sub/About';
import Community from './components/sub/Community';
import Location from './components/sub/Location';
import Join from './components/sub/Join';
import Shop from './components/sub/Shop';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Main />
					<popUp />
				</Route>

				<Route path='/'>
					<Header />
				</Route>
			</Switch>

			<Route path='/youtube' component={Youtube} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/about' component={About} />
			<Route path='/community' component={Community} />
			<Route path='/contactus' component={Location} />
			<Route path='/join' component={Join} />
			<Route path='/shop' component={Shop} />

			<Footer />
		</>
	);
}

export default App;

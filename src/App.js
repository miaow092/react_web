import { Route, Switch } from 'react-router-dom';
import './scss/style.scss';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Popup from './components/common/Popup';

//main
import Visual from './components/main/Visual';
import Content from './components/main/Content';

//sub
import Youtube from './components/sub/Youtube';
import Gallery from './components/sub/Gallery';
import About from './components/sub/About';
import Account from './components/sub/Account';
import ContactUs from './components/sub/ContactUs';
import Join from './components/sub/Join';
import Shop from './components/sub/Shop';
const path = process.env.PUBLIC_URL;

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<Content />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

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

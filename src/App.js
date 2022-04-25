import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionType';

import './scss/style.scss';

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
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: types.YOUTUBE.start });
		dispatch({ type: types.FLICKR.start, opt: { type: 'interest' } });
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Main />
					<Popup />
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

			<Footer />
		</>
	);
}

export default App;

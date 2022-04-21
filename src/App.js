import { Route, Switch } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { setYoutube } from './redux/action';
import axios from 'axios';

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
	const vidData = useSelector((state) => state.youtubeReducer.youtube);
	//비어있는 reducer데이터에 정보값을 전송하기 위한 dispatch함수 활성화
	const dispatch = useDispatch();

	//dispatch로 전달할 데이터를 비동기로 가져오기 위한 axios함수 정의
	const fetchYoutube = async () => {
		const key = 'AIzaSyC6QtD-1n1UHsw8dD64nAkoS8BVKV5AV5M';
		const playListId = 'PL-Cr7h7IRk-u_Ww5bM44hhX1vkx5ctUFC';
		const num = 4;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxesRults=${num}`;

		//axios로 비동기 데이터 가져옴
		await axios.get(url).then((json) => {
			//가져온 데이터를 setYoutube함수의 인수로 넣어서 action객체를 생성
			//생성된 action객체를 dispatch함수로 다시 리듀서에 전달
			dispatch(setYoutube(json.data.items));
		});
	};
	useEffect(() => {
		fetchYoutube();
	}, []);

	//추가된 데이터를 확인
	useEffect(() => {
		console.log(vidData);
	}, [vidData]);

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

			<Footer />
		</>
	);
}

export default App;

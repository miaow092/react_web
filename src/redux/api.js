import axios from 'axios';
const path = process.env.PUBLIC_URL;

export const getFlickr = async (opt) => {
	const key = '554ae9d07ac78ae8534bc6998305d288';
	const method1 = 'flickr.interestingness.getList';
	const method2 = 'flickr.photos.search';
	const num = 20;
	let url = '';

	if (opt.type === 'interest') {
		url = `https://www.flickr.com/services/rest/?method=${method1}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
	}

	if (opt.type === 'search') {
		url = `https://www.flickr.com/services/rest/?method=${method2}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
	}

	return await axios.get(url);
};

export const getYoutube = async () => {
	const key = 'AIzaSyC6QtD-1n1UHsw8dD64nAkoS8BVKV5AV5M';
	const playListId = 'PL-Cr7h7IRk-tDu8QdvcVP3-P-deQflV9v';
	const num = 6;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxesRults=${num}`;

	return await axios.get(url);
};

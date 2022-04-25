export const FLICKR = {
	start: 'FLICKR_START',
	success: 'FLICKR_SUCCESS',
	error: 'FLICKR_ERROR',
};

export const setYoutube = (data) => {
	return {
		type: 'SET_YOUTUBE',
		payload: data,
	};
};

//액션 타입 세계. 에이피아이 요청, 성공, 실패
export const FLICKR_STAR = 'FLICKR_STAR';
export const FLICKR_SUCCESS = 'FLICKR_SUCCESS';
export const FLICKR_FAIL = 'FLICKR_FAIL';

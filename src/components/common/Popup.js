import styled from 'styled-components';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Pop = styled.aside`
	width: 100%;
	height: 100vh;
	padding: 5vw;
	position: fixed;
	top: 0px;
	left: 0px;
	background: rgba(0, 0, 0, 0.9);
	z-index: 10;
	> span {
		font: bold 25px/1 'arial';
		color: #85abbd;
		cursor: pointer;
		position: absolute;
		top: 2vw;
		right: 2vw;
	}
	.con {
		width: 100%;
		height: 100%;
		border: 1px solid #85abbd;
		overflow: hidden;
		iframe {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
`;

function Popup(props) {
	return (
		<Pop>
			<span onClick={() => props.setOpen(false)}>
				<FontAwesomeIcon icon={faX} />
			</span>
			<div className='con'>{props.children}</div>
		</Pop>
	);
}

export default Popup;

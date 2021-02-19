import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong } from "../../store/currentSong";

import "./style.css";

const SongTable = (props) => {
	const { trackList, album } = props;
	const { currentSong } = useSelector((state) => state);

	const dispatch = useDispatch();

	return (
		<Container className='my-5 mr-5'>
			<ListGroup>
				{trackList.map((track, idx) => (
					<ListGroup.Item
						className='track-list d-flex justify-content-between'
						key={idx}
						onClick={() => dispatch(setCurrentSong(track))}>
						{" "}
						<span>{track.title}</span>{" "}
					</ListGroup.Item>
				))}
			</ListGroup>
		</Container>
	);
};

export default SongTable;

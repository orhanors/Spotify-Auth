import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import "./style.css";
import { addPlaylist } from "../../store/playList";
import { setUndoFalse, setUndoTrue } from "../../store/undo";
function CreatePlaylistModal(props) {
	const [playListName, setPlaylistName] = useState("");
	const dispatch = useDispatch();
	const handlePlaylistSave = () => {
		const id = uniqid();
		const playlist = {
			id,
			name: playListName,
			songs: [],
		};

		dispatch(addPlaylist(playlist));
		props.onHide();
		setPlaylistName("");
		dispatch(setUndoTrue());

		// setTimeout(() => {
		// 	dispatch(setUndoFalse());
		// }, 10000);
	};

	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					<h4>Create Playlist</h4>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className='add-song-playlist-container'>
					<input
						className='add-song-playlist'
						type='text'
						placeholder='Playlist name'
						value={playListName}
						onChange={(e) => setPlaylistName(e.target.value)}
					/>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='success' onClick={handlePlaylistSave}>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default CreatePlaylistModal;

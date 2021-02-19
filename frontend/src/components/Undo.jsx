import React, { useRef, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ActionCreators } from "redux-undo";
import { useDispatch, useSelector } from "react-redux";
import { setUndoFalse } from "../store/undo";

import useOnClickOutside from "../custom-hooks/useOnClickOutside";

function Undo(props) {
	const undoRef = useRef();
	const dispatch = useDispatch();
	const { undo } = useSelector((state) => state);

	//If user clicks outside make undo to false
	//In @CreatePlaylistModal, when user saves a playlist we are making undo true
	useOnClickOutside(undoRef, () => undo && dispatch(setUndoFalse()));
	return (
		<div ref={undoRef} className='undo-container'>
			{console.log("undo in component::", undo)}
			{undo && (
				<div className='undo d-flex flex-column justify-content-center'>
					<p>Undo Changes</p>
					<Button
						variant='success'
						onClick={() => {
							dispatch(ActionCreators.undo());
							//dispatch(setUndoFalse());
						}}>
						Undo
					</Button>
					<Button
						variant='primary'
						className='mt-2'
						onClick={() => {
							dispatch(ActionCreators.redo());
							//dispatch(setUndoFalse());
						}}>
						Redo
					</Button>
				</div>
			)}
		</div>
	);
}

export default Undo;

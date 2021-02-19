import React from "react";
import { useSelector, useDispatch } from "react-redux";
function Playlist(props) {
	const { playLists } = useSelector((state) => state);

	return (
		<div>
			{playLists &&
				playLists.present.map((playlist) => {
					return <p className='single-playlist'>{playlist.name}</p>;
				})}
		</div>
	);
}

export default Playlist;

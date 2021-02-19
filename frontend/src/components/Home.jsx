import React, { useState, useEffect } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import MusicGallery from "./MusicGallery";
import { findUniqueValues } from "../utils/helpers";
import { loadSearchResult, setKeyword } from "../store/search";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../store/user";
import { useHistory } from "react-router-dom";
const Home = () => {
	const dispatch = useDispatch();
	const { keyword, loading, errorMessage, songList } = useSelector(
		(state) => state.search
	);

	useEffect(() => {
		dispatch(setKeyword("Eminem"));

		dispatch(loadSearchResult("Eminem"));
		dispatch(getProfile());
	}, []);

	return (
		<Container className='home-page'>
			<MusicGallery title={keyword} musicList={songList} />

			{errorMessage && (
				<div className='d-flex justify-content-center align-items-center mt-3'>
					<Alert style={{ marginTop: "20%" }} variant='danger'>
						&#9762; Something went wrong!
						<strong> Refresh the page </strong>
					</Alert>
				</div>
			)}
			{[1, 2, 3, 4, 5, 6, 7].map((el) => (
				<br key={el} />
			))}
		</Container>
	);
};

export default Home;

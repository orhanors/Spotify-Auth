import React, { useState, useEffect } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import MusicGallery from "./MusicGallery";
import { findUniqueValues } from "../utils/helpers";
import { loadSearchResult, setKeyword } from "../store/search";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
	const dispatch = useDispatch();
	const { keyword, loading, errorMessage, songList } = useSelector(
		(state) => state.search
	);
	// const [daftPunk,setDaftPunk]=useState([])
	// const [jayZ,setJayZ]=useState([])
	// const [kendrickLamer,setKendrickLamar] =useState([])

	useEffect(() => {
		dispatch(setKeyword("Eminem"));

		dispatch(loadSearchResult("Eminem"));
	}, []);

	// state = {
	// 	daftPunk: [],
	// 	jayZ: [],
	// 	kendrickLamar: [],
	// 	isError: false,
	// 	isLoading: true,
	// };

	//Fetches and returns different named albums
	// getAlbums = async (artist) => {
	// 	try {
	// 		const response = await fetch(
	// 			"https://deezerdevs-deezer.p.rapidapi.com/search?q=" +
	// 				artist.toLowerCase(),
	// 			{
	// 				method: "GET",
	// 				headers: {
	// 					"x-rapidapi-key":
	// 						"91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
	// 					"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
	// 				},
	// 			}
	// 		);

	// 		if (response.ok) {
	// 			const musicList = await response.json();
	// 			console.log("homepage search result", musicList.data);

	// 			if (musicList) {
	// 				let uniqueMusicList = findUniqueValues(musicList.data);

	// 				if (artist == "Daft Punk") {
	// 					this.setState({
	// 						daftPunk: uniqueMusicList.slice(0, 8),
	// 					});
	// 				} else if (artist == "Jay Z") {
	// 					this.setState({ jayZ: uniqueMusicList.slice(0, 8) });
	// 				} else {
	// 					this.setState({
	// 						kendrickLamar: uniqueMusicList.slice(0, 8),
	// 						isLoading: false,
	// 					});
	// 				}
	// 			}
	// 		} else {
	// 			this.setState({ isError: true, isLoading: false });
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 		this.setState({ isError: true, isLoading: false });
	// 	}
	// };

	// componentDidMount() {
	// 	const mainPageArtists = ["Daft Punk", "Jay Z", "Kendrick Lamar"];
	// 	for (let artist of mainPageArtists) {
	// 		this.getAlbums(artist);
	// 	}
	// }

	return (
		<Container className='home-page'>
			<MusicGallery title={keyword} musicList={songList} />

			{/* {this.state.isLoading ? (
				<Spinner
					style={{ marginLeft: "50%", marginTop: "20%" }}
					animation='grow'
					variant='success'
				/>
			) : (
				<div>
					{this.props.searchedMusics &&
					this.props.searchedMusics.length > 3 ? (
						<MusicGallery
							title={this.props.keyword}
							musicList={this.props.searchedMusics}
						/>
					) : (
						!errorMessage && (
							<div>
								<MusicGallery
									title={"Daft Punk"}
									musicList={this.state.daftPunk}
								/>
								<MusicGallery
									title={"Jay Z"}
									musicList={this.state.jayZ}
								/>
								<MusicGallery
									title={"Kendrick Lamar"}
									musicList={this.state.kendrickLamar}
								/>
							</div>
						)
					)}
				</div>
			)} */}
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

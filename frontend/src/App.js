import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import React, { useEffect, useState } from "react";
import AlbumPage from "./components/AlbumPage";

import { BrowserRouter as Router, Route } from "react-router-dom";
import ArtistPage from "./components/ArtistPage";

import configureStore from "./store/configureStore";
import Undo from "./components/Undo";
import Signup from "./components/Authorization/Signup";
import Login from "./components/Authorization/Login";

const store = configureStore();

console.log("Our STORE is: ", store);

class App extends React.Component {
	state = { searchedMusicList: [], searchedString: "" };

	getMovies = async (keyword) => {
		console.log("function is working");

		try {
			const response = await fetch(
				`https://deezerdevs-deezer.p.rapidapi.com/search?q=${keyword}`,
				{
					method: "GET",
					headers: {
						"x-rapidapi-key":
							"91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
						"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
					},
				}
			);

			const musicList = await response.json();
			console.log("reps", musicList);
			if (response.ok) {
				console.log("searched", musicList.data);
				this.setState({
					searchedMusicList: musicList.data.slice(0, 12),
					searchedString: keyword,
				});
			}
		} catch (error) {
			// this.setState({ searchedLoading: null });
		}
	};

	// showSearchResult = (searchString) => {
	// 	this.getMovies(searchString);
	// };

	render() {
		return (
			<div className='App'>
				<Router>
					<SideBar />
					<NavBar searchedKeyword={this.getMovies} />
					<Undo />
					<Route
						path='/'
						exact
						render={(props) => (
							<Home
								{...props}
								imgClicked={this.handleImgClicked}
								keyword={this.state.searchedString}
								searchedMusics={this.state.searchedMusicList}
							/>
						)}
					/>
					<Route path='/album/:id' exact component={AlbumPage} />
					<Route
						path='/artist/:id/:name/'
						exact
						component={ArtistPage}
					/>
					<Route path='/signup' exact component={Signup} />
					<Route path='/login' exact component={Login} />
					<Player />
				</Router>
			</div>
		);
	}
}

export default App;

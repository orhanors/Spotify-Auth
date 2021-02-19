import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import React, { useEffect, useState } from "react";
import AlbumPage from "./components/AlbumPage";

import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import ArtistPage from "./components/ArtistPage";

import configureStore from "./store/configureStore";
import Undo from "./components/Undo";
import Signup from "./components/Authorization/Signup";
import Login from "./components/Authorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./store/user";

const store = configureStore();

console.log("Our STORE is: ", store);

function App() {
	const dispatch = useDispatch();
	const history = useHistory();
	const { isLoggedIn } = useSelector((state) => state.user);

	useEffect(() => {
		if (!isLoggedIn) {
			history.push("/login");
		}
	}, []);
	return (
		<div className='App'>
			<Router>
				<SideBar />
				<NavBar />
				<Undo />
				<Route path='/' exact component={Home} />
				<Route path='/album/:id' exact component={AlbumPage} />
				<Route path='/artist/:id/:name/' exact component={ArtistPage} />
				<Route path='/signup' exact component={Signup} />
				<Route path='/login' exact component={Login} />
				<Player />
			</Router>
		</div>
	);
}

export default App;

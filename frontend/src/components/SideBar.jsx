import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CreatePlaylistModal from "./common/CreatePlaylistModal";
import Playlist from "./Playlist";
class SideBar extends React.Component {
	state = { modalShow: false };

	style = {
		createPlaylistAvatar: {
			width: "32px",
			height: "32px",
			backgroundColor: "gray",
			whiteSpace: "nowrap",
		},

		likedSongsAvatar: {
			width: "32px",
			height: "32px",
			whiteSpace: "nowrap",
			background:
				"linear-gradient(135deg, rgb(69, 10, 245), rgb(196, 239, 217))",
		},
	};

	handleSidebarStyle = (e) => {
		let sidebarMainElements = Array.from(
			document.querySelectorAll(".side-main-component")
		);
		sidebarMainElements.map(
			(el) =>
				el.classList.contains("sidebar-active") &&
				el.classList.remove("sidebar-active")
		);
		e.currentTarget.classList.toggle("sidebar-active");
	};
	render() {
		return (
			<div className='sidebar'>
				<CreatePlaylistModal
					show={this.state.modalShow}
					onHide={() => this.setState({ modalShow: false })}
				/>
				<Row className='my-3 mx-1'>
					<Col md={12}>
						<Link to='/'>
							<img className='logo' src={logo} alt='logo' />
						</Link>
					</Col>
					<Row className='sidebar-top mb-3 mx-1'>
						<Col
							md={12}
							onClick={this.handleSidebarStyle}
							className='side-main-component d-flex flex-row sidebar-active'>
							<svg
								className='mr-2'
								viewBox='0 0 512 512'
								width='24'
								height='24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z'
									fill='currentColor'></path>
							</svg>
							<h5>Home</h5>
						</Col>

						<Col
							md={12}
							onClick={this.handleSidebarStyle}
							className='side-main-component d-flex flex-row'>
							<svg
								className='mr-2'
								viewBox='0 0 512 512'
								width='24'
								height='24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z'
									fill='currentColor'
									fill-rule='evenodd'></path>
							</svg>
							<h5>Search</h5>
						</Col>

						<Col
							md={12}
							onClick={this.handleSidebarStyle}
							className='side-main-component d-flex flex-row'>
							<svg
								className='mr-2'
								viewBox='0 0 512 512'
								width='24'
								height='24'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									className='mr-2'
									d='M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z'
									fill='currentColor'></path>
							</svg>
							<h5>Your Library</h5>
						</Col>
					</Row>

					<Row className='sidebar-middle mt-1 mx-1'>
						<h5 className='ml-2 mb-4'>Playlist</h5>

						<Col md={12}>
							<div
								onClick={() =>
									this.setState({ modalShow: true })
								}
								style={this.style.createPlaylistAvatar}
								className='create-playlist-icon d-flex flex-row'>
								<FontAwesomeIcon
									className='ml-2 mt-2'
									style={{ color: "black" }}
									icon={faPlus}
								/>
								<p className='ml-4'>Create Playlist</p>
							</div>
						</Col>

						<Col md={12} className='mt-2'>
							<div
								style={this.style.likedSongsAvatar}
								className='create-playlist-icon d-flex flex-row'>
								<FontAwesomeIcon
									className='ml-2 mt-2'
									style={{ color: "#8b8b8b" }}
									icon={faHeart}
								/>
								<p className='ml-4 mt-1'>Liked Songs</p>
							</div>
						</Col>
						<hr
							style={{ width: "15vw", border: "1px solid gray" }}
						/>

						<Col>
							<Playlist />
						</Col>
					</Row>
				</Row>
			</div>
		);
	}
}

export default SideBar;

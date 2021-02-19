import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

class Player extends Component {
	state = { musicData: {} };

	componentDidMount() {
		if (this.props.clickedMusicData) {
			let musicData = this.props.clickedMusicData;
			this.setState({ musicData });
		}
	}
	render() {
		const { currentSong } = this.props;

		const { cover } = this.state;
		return (
			<div className='player fixed-bottom text-white container-fluid'>
				<Row>
					<Col className='mt-2'>
						<div className='left d-flex align-items-left'>
							<img
								className='mt-2'
								style={{ width: "50px", height: "50px" }}
								src={
									currentSong
										? currentSong?.album?.cover
										: cover
								}
								alt=''
							/>
							<div className='d-flex flex-column player-title ml-3'>
								<p className='mt-2 mb-0'>
									{currentSong
										? currentSong?.title_short
										: "One Love"}
								</p>
								<p className='mb-4'>
									{currentSong
										? currentSong?.artist?.name
										: "Bob Marley"}
								</p>
							</div>
							<FontAwesomeIcon
								className='ml-4 mt-4'
								style={{ color: "gray" }}
								icon={faHeart}
							/>
						</div>
					</Col>

					<Col className='justify-content-center mt-4'>
						<div className='middle d-flex flex-column'>
							<div className='playerControls d-flex w-50 justify-content-between'>
								<svg
									width='1em'
									height='1em'
									viewBox='0 0 16 16'
									className='bi bi-shuffle'
									fill='whitesmoke'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										d='M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z'></path>
									<path d='M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z'></path>
								</svg>

								<svg
									width='1em'
									height='1em'
									viewBox='0 0 16 16'
									className='bi bi-skip-start-fill'
									fill='whitesmoke'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										d='M4.5 3.5A.5.5 0 0 0 4 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z'></path>
									<path d='M4.903 8.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V4.308c0-.63-.692-1.01-1.232-.696L4.903 7.304a.802.802 0 0 0 0 1.393z'></path>
								</svg>

								<FontAwesomeIcon
									className='ml-2 '
									style={{
										marginTop: "0.1rem",
										color: "white",
									}}
									size='xs'
									icon={faPlay}
								/>

								<svg
									width='1em'
									height='1em'
									viewBox='0 0 16 16'
									className='bi bi-skip-end-fill'
									fill='whitesmoke'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										d='M12 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z'></path>
									<path d='M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z'></path>
								</svg>

								<svg
									width='1em'
									height='1em'
									viewBox='0 0 16 16'
									className='bi bi-reply'
									fill='whitesmoke'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										d='M9.502 5.013a.144.144 0 0 0-.202.134V6.3a.5.5 0 0 1-.5.5c-.667 0-2.013.005-3.3.822-.984.624-1.99 1.76-2.595 3.876C3.925 10.515 5.09 9.982 6.11 9.7a8.741 8.741 0 0 1 1.921-.306 7.403 7.403 0 0 1 .798.008h.013l.005.001h.001L8.8 9.9l.05-.498a.5.5 0 0 1 .45.498v1.153c0 .108.11.176.202.134l3.984-2.933a.494.494 0 0 1 .042-.028.147.147 0 0 0 0-.252.494.494 0 0 1-.042-.028L9.502 5.013zM8.3 10.386a7.745 7.745 0 0 0-1.923.277c-1.326.368-2.896 1.201-3.94 3.08a.5.5 0 0 1-.933-.305c.464-3.71 1.886-5.662 3.46-6.66 1.245-.79 2.527-.942 3.336-.971v-.66a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.667z'></path>
								</svg>
							</div>
							<div className='progressContainer d-flex align-items-center'>
								<span className='currentTime'>00:00</span>
								<div className='progress w-100'>
									<div
										className='progress-bar'
										role='progressbar'
										aria-valuenow='0'
										aria-valuemin='0'
										aria-valuemax='100'>
										<audio
											src=''
											id='current_audio'></audio>
									</div>
								</div>
								<span className='duration'>06:28</span>
							</div>
						</div>
					</Col>

					<Col className='justify-content-end mt-2'>
						<div className='d-flex justify-content-end'>
							<button type='button' className='btn'>
								<svg
									width='1em'
									height='1em'
									viewBox='0 0 16 16'
									className='bi bi-justify-left'
									fill='whitesmoke'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										d='M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z'></path>
								</svg>
							</button>
							<button type='button' className='btn'>
								<svg
									width='1em'
									height='1em'
									viewBox='0 0 16 16'
									className='bi bi-display'
									fill='whitesmoke'
									xmlns='http://www.w3.org/2000/svg'>
									<path d='M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75z'></path>
									<path
										fill-rule='evenodd'
										d='M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z'></path>
								</svg>
							</button>
							<button type='button' className='btn'>
								<svg
									width='1em'
									height='1em'
									viewBox='0 0 16 16'
									className='bi bi-volume-down'
									fill='whitesmoke'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										d='M8.717 3.55A.5.5 0 0 1 9 4v8a.5.5 0 0 1-.812.39L5.825 10.5H3.5A.5.5 0 0 1 3 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM8 5.04L6.312 6.39A.5.5 0 0 1 6 6.5H4v3h2a.5.5 0 0 1 .312.11L8 10.96V5.04z'></path>
									<path d='M10.707 11.182A4.486 4.486 0 0 0 12.025 8a4.486 4.486 0 0 0-1.318-3.182L10 5.525A3.489 3.489 0 0 1 11.025 8c0 .966-.392 1.841-1.025 2.475l.707.707z'></path>
								</svg>
							</button>
							{/* <div
								style='
                    width: 5rem;
                    height: 0.3rem;
                    background-color: whitesmoke;
                    margin-right: 0.5rem;
                    margin-left: 0.5rem;
                    border-radius: 5px;
                  '></div> */}
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Player);

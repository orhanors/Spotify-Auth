import React, { Component } from "react";

import { Row, Col, Container, Alert, Spinner } from "react-bootstrap";

import SongTable from "./common/SongTable";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
// import { connect } from "react-redux";

// const mapStateToProps = (state) => state.jobs;

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentSong: (song) =>
//     dispatch({ type: "SET_CURRENT_SONG", payload: song }),
// });

//https://deezerdevs-deezer.p.rapidapi.com/album/{id}
class AlbumPage extends Component {
	state = {
		album: {},
		addComment: {
			comment: "",
			rate: 1,
			elementId: this.props.match.params.id,
		},
		errMessage: false,
		submittedSize: 0,
		isLoading: true,
	};

	updateCommentField = (e) => {
		let addComment = { ...this.state.addComment };
		let currentId = e.currentTarget.id;

		addComment[currentId] = e.currentTarget.value;

		this.setState({ addComment });
	};

	submitComment = async (e) => {
		e.preventDefault();
		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/",
				{
					method: "POST",
					body: JSON.stringify(this.state.addComment),
					headers: new Headers({
						"Content-Type": "application/json",
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDYzNzYyNTAsImV4cCI6MTYwNzU4NTg1MH0.cUjPWOFQsf4d1kHOs7iRz8DEhQR6YzvEIHTFEgW6Dg8",
					}),
				}
			);

			if (response.ok) {
				// alert("Comment saved!");
				this.setState({
					addComment: {
						comment: "",
						rate: 1,
						elementId: this.props.match.params.id,
					},

					submittedSize: this.state.submittedSize + 1,
					isLoading: false,
				});
			} else {
				alert("something went wrong");
				let error = await response.json();
				this.setState({ errMessage: true, isLoading: false });
			}
		} catch (e) {
			this.setState({ errMessage: true, isLoading: false });
		}
	};

	getAlbums = async () => {
		const albumId = this.props.match.params.id;

		try {
			const response = await fetch(
				"https://deezerdevs-deezer.p.rapidapi.com/album/" + albumId,

				{
					method: "GET",
					headers: {
						"x-rapidapi-key":
							"91cbdcb779mshb25e7872769b4fcp110c07jsnbcf1d17bc30b",
						"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
					},
				}
			);
			const album = await response.json();
			if (response.ok) {
				this.setState({ album, isLoading: false });
			} else {
				this.setState({ errMessage: true, isLoading: false });
			}
		} catch (error) {
			console.log(error);
			this.setState({ errMessage: true, isLoading: false });
		}
	};

	componentDidMount() {
		this.getAlbums();
	}
	render() {
		const { album } = this.state;

		// const { data } = this.state.album.tracks;
		return (
			<React.Fragment>
				{this.state.album.tracks && !this.state.isLoading ? (
					<Container className='main-page album-page'>
						<h1 className=' text-center text-white mt-2'>
							{album.title}
						</h1>
						<hr />
						<Row>
							<Col md={4} className=' mt-3'>
								<img
									className='album-image mb-0'
									style={{ width: "300px" }}
									src={album.cover_medium}
									alt='artist'
								/>
							</Col>

							<Col md={8}>
								<SongTable
									trackList={album.tracks.data}
									album={album}
								/>
							</Col>
						</Row>
						<hr />
						<Row>
							<Col className='mr-5' md={4}>
								<AddComment
									addComment={this.state.addComment}
									onChangeElement={this.updateCommentField}
									onSubmitComment={this.submitComment}
									albumId={this.props.match.params.id}
								/>
							</Col>

							<Col md={6}>
								<CommentList
									submittedSize={this.state.submittedSize}
									movieId={this.props.match.params.id}
								/>
							</Col>
						</Row>

						{this.state.errMessage && (
							<div className='d-flex justify-content-center align-items-center mt-3'>
								<Alert variant='danger'>
									&#9762; Something went wrong!
									<strong> Refresh the page </strong>
								</Alert>
							</div>
						)}
						{[1, 2, 3, 4, 5, 6, 7].map((el) => {
							return <br />;
						})}
					</Container>
				) : (
					<Spinner
						style={{ marginLeft: "50%", marginTop: "20%" }}
						animation='grow'
						variant='secondary'
					/>
				)}
			</React.Fragment>
		);
	}
}

export default AlbumPage;

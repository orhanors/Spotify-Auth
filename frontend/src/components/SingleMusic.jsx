import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong } from "../store/currentSong";

const SingleMusic = (props) => {
  const [isClickedtoPlay, setIsClickedtoPlay] = useState(false);

  const dispatch = useDispatch();

  const { musicData } = props;
  return (
    <Card className="music-card" style={{ width: "12rem" }}>
      <Card.Img
        // onClick={this.props.imgClicked(
        // 	musicData.album.cover_small,
        // 	musicData.album.title,
        // 	musicData.artist.name
        // )}
        className="card-img"
        style={{ padding: "1rem" }}
        variant="top"
        src={musicData.album.cover_medium}
      />
      <div
        className="icon-box w3-animate-zoom"
        onClick={() =>
          setIsClickedtoPlay({
            isClickedtoPlay: !isClickedtoPlay,
          })
        }
      >
        <div onClick={() => dispatch(setCurrentSong(musicData))}>
          <FontAwesomeIcon
            className="fa-xs "
            icon={isClickedtoPlay ? faPause : faPlay}
          />
        </div>
      </div>
      <Card.Body className="music-card-body">
        <Card.Title>
          <Link style={{ color: "white" }} to={`/album/${musicData.album.id}`}>
            {musicData.album.title.length > 16
              ? musicData.album.title.substring(0, 15) + "..."
              : musicData.album.title}
          </Link>
        </Card.Title>
        <Card.Title>
          <Link
            style={{ color: "gray" }}
            to={`/artist/${musicData.artist.id}/${musicData.artist.name}`}
          >
            {musicData.artist.name}
          </Link>
        </Card.Title>
        {/* <Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default SingleMusic;

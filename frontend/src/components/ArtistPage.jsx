import React, { useEffect } from "react"
import { Container, Spinner, Alert } from "react-bootstrap"
import "../Artist.css"
import { useDispatch, useSelector } from "react-redux"
import { loadArtistResult } from "../store/artist"

const ArtistPage = (props) => {
  const dispatch = useDispatch()
  const artistId = props.match.params.id

  useEffect(() => {
    dispatch(loadArtistResult(artistId))
  }, [artistId, dispatch])

  const { performer, loading, isError } = useSelector((state) => state.artist)
  return (
    <Container className="main-page artist-page-wrapper">
      {performer && !loading && !isError ? (
        <div id="artistpage" className=" col-10">
          <section className="artist-page-header">
            <div className="artist-top-header">
              <div className="artist-top-image d-flex flex-column">
                <img src={performer.picture_big} alt="artist" />
                <div className="artist-top-components d-flex justify-content-center">
                  <div>
                    <p>{performer.nb_fan} MONTHLY LISTENERS</p>
                  </div>
                  <h5>{performer.name}</h5>
                  <div className="artist-top-image-buttons">
                    <button type="button" className="btn btn-success px-5">
                      Play
                    </button>
                    <button type="button" className="btn btn-outline-dark px-5">
                      Follow
                    </button>
                    <button type="button" className="btn btn-success">
                      ...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        !isError && (
          <Spinner
            style={{ marginLeft: "50%", marginTop: "20%" }}
            animation="grow"
            variant="success"
          />
        )
      )}

      {isError && (
        <div
          style={{ marginTop: "20%" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Alert variant="danger">
            &#9762; Something went wrong!
            <strong> Refresh the page </strong>
          </Alert>
        </div>
      )}
    </Container>
  )
}

export default ArtistPage

import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleMusic from "./SingleMusic";
class MusicGallery extends Component {
  state = {};
  render() {
    return (
      <Container className="music-gallery mb-5 ml-2 mt-5">
        <h1 className="ml-4" style={{ fontWeight: "bold", color: "white" }}>
          {this.props.title}
        </h1>
        <Row>
          {this?.props?.musicList?.map((music, idx) => {
            return (
              <Col className="ml-4 my-4" key={idx}>
                <SingleMusic musicData={music} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default MusicGallery;

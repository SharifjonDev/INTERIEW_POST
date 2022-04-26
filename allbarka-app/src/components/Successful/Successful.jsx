/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./style/Successful.scss";

const Successful = () => {
  return (
    <div className="successful">
      <div className="container-fluid">
        <img
          className="successful_flag_bottom"
          src="https://svgshare.com/i/gc9.svg"
          alt="flagBottom"
        />
      </div>
      <Container>
        <Row>
          <Col xl="6">
            <div className="successful__title">
              <h3>How our client made 10x revenue</h3>
              <img
                src="https://i.ibb.co/F6fQrPf/f4ebe6c9475fad80fdfc0a54ba86590e.png"
                alt="f4ebe6c9475fad80fdfc0a54ba86590e"
                border="0"
              />
              <div className="successful__content">
                <h5>"I learned so much, even as a professional".</h5>
                <p>
                  "Ut vehicula lacus a lacus tempor, nec viverra justo
                  condimentum. Integer eu urna dapibus, scelerisque nisl non,
                  semper ipsum. Etiam dolor arcu, tincidunt a arcu eget."
                </p>
                <h6>Juan Huang</h6>
              </div>
            </div>
          </Col>
          <Col xl="6">
            <div className="seccessful__right">
              <h1>Other successful stories</h1>
              <div className="successful__type">
                <h2>Amateur</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius.
                </p>
                <a href="#">More Information</a>
              </div>
              <div className="successful__type">
                <h2>Beginner</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius.
                </p>
                <a href="#">More Information</a>
              </div>
              <div className="successful__type">
                <h2>Professional</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius.
                </p>
                <a href="#">More Information</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Successful;

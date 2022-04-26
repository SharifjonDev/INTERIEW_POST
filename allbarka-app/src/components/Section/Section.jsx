import React from "react";
import { Container, Row, Col } from "reactstrap";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import "./style/Section.scss";

const productionDate = [
  {
    img: "https://svgshare.com/i/gaM.svg",
    title: "Asosiy Plyonka Turlari",
    desc: "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.",
  },
  {
    img: "https://svgshare.com/i/gc4.svg",
    title: "Asosiy Zajim turlari",
    desc: "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.",
  },
  {
    img: "https://svgshare.com/i/gaW.svg",
    title: "Tomchilab sug’orish tizimi",
    desc: "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.",
  },
  {
    img: "https://svgshare.com/i/gbu.svg",
    title: "ISSIQXONANING sovutish TIZIMI",
    desc: "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.",
  },
  {
    img: "https://svgshare.com/i/gbv.svg",
    title: "ISSIQXONANING ISITISH TIZIMI",
    desc: "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.",
  },
  {
    img: "https://svgshare.com/i/gcC.svg",
    title: "QO’shimcha aksessuarlar",
    desc: "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint.",
  },
];

const Section = () => {
  const fetchProducts = () => {
    return productionDate.map((item, index) => (
      <Col key={index} xl="6">
        <div className="products__box d-flex align-items-center">
          <img src={item.img} alt={item.title} />
          <div className="products__title">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      </Col>
    ));
  };

  return (
    <div className="production" id="products">
      <Container>
        <Row>
          <Col xl="12">
            <div className="production__title">
              <h1>our production</h1>
              <p>
                "Your work is going to fill a large part of your life, and the
                only way to be truly satisfied is to do what you believe is
                great work
              </p>
            </div>
          </Col>
          {fetchProducts()}
        </Row>
      </Container>
      <About />
      <Carousel />
    </div>
  );
};

export default Section;

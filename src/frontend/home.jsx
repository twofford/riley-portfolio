import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import pancakes from '../images/6.jpg';
import polenta from '../images/9.jpg';
import cornedbeef from '../images/10.jpg';
import chili from '../images/11.jpg';
import eggbread from '../images/12.jpg';
import noodles from '../images/17.jpg';
import noodles2 from '../images/19.jpg';
import pie from '../images/21.jpg';

const Home = () => {
  return (
    <Carousel>

      <Carousel.Item>
        <img className="d-block w-100" src={pancakes} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={polenta} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={cornedbeef} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={chili} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={eggbread} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={noodles} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={noodles2} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={pie} alt="Third slide" />
      </Carousel.Item>

    </Carousel>
  );
};

export default Home;

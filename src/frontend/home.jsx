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
import eggrolls from '../images/5.jpeg';
import tikka from '../images/8.jpeg';
import margaritas from '../images/13.jpg';
import cheesesticks from '../images/14.jpeg';
import cheese from '../images/15.jpeg';
import cheese2 from '../images/18.jpeg';
import tartare from '../images/20.jpg';

const Home = () => {
  return (
    <>
      <Carousel className="d-none d-sm-block">
        <Carousel.Item>
          <img className="w-100" src={pancakes} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={polenta} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={cornedbeef} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={chili} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={eggbread} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={noodles} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={noodles2} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={pie} alt="TK" />
        </Carousel.Item>
      </Carousel>

      <Carousel className="d-block d-sm-none">
        <Carousel.Item>
          <img className="w-100" src={eggrolls} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={tikka} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={margaritas} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={cheesesticks} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={cheese} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={cheese2} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={tartare} alt="TK" />
        </Carousel.Item>
        
      </Carousel>
    </>
  );
};

export default Home;

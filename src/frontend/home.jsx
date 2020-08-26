import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import lumpia1 from "../images/home/banana-lumpia-01-7002344_0.jpg";
import lumpia2 from "../images/home/banana-lumpia-03-7002344.jpg";
import pancakes1 from "../images/home/gluten-free-buttermilk-pancakes-01-7001990-1.jpg";
import pancakes2 from "../images/home/gluten-free-buttermilk-pancakes-03-7001990_0.jpg";
import chicken1 from "../images/home/instant-pot-chicken-thighs-7001428_horiz.jpg";
import chicken2 from "../images/home/instant-pot-chicken-thighs-7001428_vert.jpg";
import cornedbeef1 from "../images/home/instant-pot-corned-beef-01-7001990.jpg";
import cornedbeef2 from "../images/home/instant-pot-corned-beef-03-7001990.jpg";
import chili1 from "../images/home/instant-pot-turkey-chili-7001209-horiz.jpg";
import chili2 from "../images/home/instant-pot-turkey-chili-7001209-vert.jpg";
import khachapuri1 from '../images/home/khachapuri-04-7001708-horiz.jpg';
import khachapuri2 from "../images/home/khachapuri-06-7001708-vert_0.jpg";
import mezcal1 from "../images/home/lemon-mezcal-margarita-01-7003589.jpg";
import mezcal2 from "../images/home/lemon-mezcal-margarita-02-7003589_0.jpg";
import chowmein1 from "../images/home/shrimp-chow-mein-7000860-0518_horiz.jpg";
import chowmein2 from "../images/home/shrimp-chow-mein-7000860-0518_vert.jpg";
import blueberry1 from "../images/home/vegan-blueberry-crisp-B-7000860-0518_horiz.jpg";
import blueberry2 from "../images/home/vegan-blueberry-crisp-B-7000860-0518_vert.jpg";

const Home = () => {
  return (
    <>
      <Carousel className="d-none d-sm-block">
        <Carousel.Item>
          <img className="w-100" src={lumpia1} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={pancakes1} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={chicken1} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={cornedbeef1} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={chili1} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={khachapuri1} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={mezcal1} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={chowmein1} alt="TK" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={blueberry1} alt="TK" />
        </Carousel.Item>
      </Carousel>

      <Carousel className="d-block d-sm-none">
        <Carousel.Item>
          <img className="w-100" src={lumpia2} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={pancakes2} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={chicken2} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={cornedbeef2} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={chili2} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={khachapuri2} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={mezcal2} alt="TK" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="w-100" src={chowmein2} alt="TK" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={blueberry2} alt="TK" />
        </Carousel.Item>

      </Carousel>
    </>
  );
};

export default Home;

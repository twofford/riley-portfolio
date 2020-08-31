import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyModal from "./modal";

const Styling = () => {
  const images = {};

  function importAll(r) {
    r.keys().forEach((key) => (images[key] = r(key)));
  }

  importAll(require.context("../images/styling/", false, /\.(jpg|png)/));

  return (
    <>
      <style type="text/css">
        {`.img-thumbnail {
          border: none;
        }`}
      </style>
      <Container fluid>
        <Row>
          <Col md="4">
            <MyModal content={images["./All Purpose Breakfast Batter.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Bitter Martini.jpg"]}/>
          </Col>
          <Col md="4">
            <MyModal content={images["./Bitters Cocktails.jpg"]} />
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <MyModal content={images["./Blender Frosting.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Blue Cheese Dip.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Carrot Limeade.jpg"]} />
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <MyModal content={images["./Chili with Polenta.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Chili-Stuffed Peppers.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Coconut Water Granita.jpg"]} />
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <MyModal content={images["./Cupcakes.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Dry Fried Veggies.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Extra Dark and Stormy.jpg"]} />
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <MyModal content={images["./Froyo Pops.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Frozen Yogurt.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Fruit Sushi.jpg"]} />
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <MyModal content={images["./Granola Bark.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Hearts of Palm Dip.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Hot Dogs.jpg"]} />
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <MyModal content={images["./Ice Cream Sandwiches.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Leftover Pie Sundae.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Lemon Espresso.jpg"]} />
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <MyModal content={images["./Mocktails.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Pandoro Tree.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Prosciutto Carbonara.jpg"]} />
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <MyModal content={images["./Pull Apart Pigs in a Blanket.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Pull Apart Sliders.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Ravioli alla Norma.jpg"]} />
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <MyModal content={images["./Rhubarb Bostock.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Rice Krispies.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Sausage and Peppers Pasta.jpg"]} />
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <MyModal content={images["./Sheet Pan Pancake.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Skillet Chili Nachos.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Sorbet Champagne Cocktails.jpg"]} />
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <MyModal content={images["./Sweetheart Thumbprints.jpg"]} />
          </Col>
          <Col md="4">
            <MyModal content={images["./Thai Curry Shrimp Linguine.jpg"]} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Styling;

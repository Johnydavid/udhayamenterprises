import React from "react";
import data from "../Data.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

const Products = (props) => {
  return (
    <div>
      <h2>Products </h2>

      <Container>
        <Row>
          <div className="row text-center  row-cols-md-4 g-4 ">
            {props.data.map((item, index) => {
              return (
                <div key={index}>
                  <Card>
                    <h4 className="cardText">{item.cartText} </h4>

                    <Card.Img
                      className="cardImg"
                      variant="top"
                      src={item.imageSrc}
                      alt={item.imageAlt}
                    />

                    <Card.Body>
                      {/* <Card.Title>{item.cardName}</Card.Title> */}

                      <Card.Text>
                        <h2>
                          <Badge bg="dark">{item.price}</Badge>
                        </h2>

                        {/* <badge className ="badgeClass">{item.price}</badge> */}
                      </Card.Text>

                      <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Products;

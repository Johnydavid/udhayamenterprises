import React from "react";
import data from "../data.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.css";

const Products = (props) => {
  return (
    <div>
      <h2>Products </h2>
      <div className="cardcontainer">
  
      

        {props.data.map((item, index) => {
          return (
            <div key={index}>
              <Card style={{ width: "20rem" }}>
              <h4>{item.cartText} </h4>
                <Card.Img
                  variant="bottom"
                  src={item.imageSrc}
                  alt={item.imageAlt}
                />

                <Card.Body>
                  <Card.Title>{item.cardName}</Card.Title>
              
                  <Card.Text>
                  <badge>{item.price}</badge>
                  </Card.Text>
                 
                  <Button variant="primary">Add to Cart</Button>
                  
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

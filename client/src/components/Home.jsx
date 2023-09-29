import React from 'react'
import "./Home.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigbar from './Navigbar';

const Home = () => {
  <Navigbar />
  return (
   
    <Container>
      <Row>
      <Col>
      <h1> Udhayam Enterprises</h1>

      <p>
        Manufacturers of Cow Dung Panchagavya Deepams
        </p>

        <p>
          Benefits of Panchagavya Deepams
        </p>
      
      </Col>
  

     


    

      </Row>

   
        </Container>
  )
}

export default Home
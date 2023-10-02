import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import "./Contact.css"

const Contact = () => {
  return (
    <div>
        Udhaya Kumar

        <p> 
            Mobile: (91) 97898 78250
        </p>

        <div className='form_container' >  
      

        

 <Container>

    <Form >
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Messages / Queries</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </Container> 


        </div>


    </div>
  )
}

export default Contact
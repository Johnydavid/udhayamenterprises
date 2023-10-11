import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import "./Contact.css"

const Contact = () => {
  const form = useRef();
  

  const sendEmail = (e) =>{
    e.preventDefault();

   
  


    emailjs.sendForm(   
      "service_b0g9ahl",
      "template_f6q5nnz",    
      form.current,
      "b3Ooa33hXxkbbqNvL"
    )
    .then(
      (result)=>{
        console.log(result.text);
        console.log("Message Sent Successfully");
          e.target.reset();
      },
    (error)=>{
      console.log(error.text)
    }
    )

  }
  return (
    <div>
        Udhaya Kumar

        <p> 
            Mobile: (91) 97898 78250
        </p>

        <div className='form_container' >  
      

        

 <Container>

    <Form ref={form} onSubmit={sendEmail}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  name='from_name' required/>
      </Form.Group>

         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="text"   name='mobile_number' required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"   name='from_email' required/>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Messages / Queries</Form.Label>
        <Form.Control as="textarea" rows={3} name='message' required/>
      </Form.Group>

      <Button variant="primary" type="submit" value="Send">
        Submit
      </Button>
    </Form>

    </Container> 


        </div>


    </div>
  )
}

export default Contact
import React from 'react'
import {Row, Col, Container,Form,Button} from 'react-bootstrap'
import FormBottom from '../FormBottom/FormBottom'
import Navbar from '../../pages/Navbar/Navbar'
import Footer from '../../pages/Footer/Footer'
import Section2 from '../Section2/Section2'
import './Form1.css'
const Form1 = () => {
  return (
    <>
    <Navbar/>
    <section className="get-touch-banner">
<div class="container get-touch-container">
<div class="row">
<div class="col-md-12">
<div class="wrapper">
<h1>Suggestion? Help? Just want to say Hi?</h1>
<h2>Fill out the form below and one of the Kidzapp family will be in touch</h2>
</div>
</div>
</div>
</div>
</section>
      <Container>
      <Form className='contactForm'>
          <Row>
          
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label className="formLabel" htmlFor="Firstname"> First name</Form.Label>
                         <Form.Control className="field" type="text" placeholder="Enter First name" />
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3">
                <Form.Label className="formLabel"  htmlFor="Lastname"> Last name</Form.Label>
                <Form.Control  className="field" type="text"/>
                </Form.Group>
                </Col>
         
            </Row>
            <Col>
            <Form.Group className="mb-3">
                <Form.Label className="formLabel1"  htmlFor="email">Email</Form.Label>
                <Form.Control  className="field" type="email"/>
            </Form.Group>    
            </Col>
            <Col>
            <Form.Group className="mb-3">
                <Form.Label className="formLabel1"  htmlFor="Subject">Subject</Form.Label>
                <Form.Control  className="field" type="text"/>
            </Form.Group>    
            </Col>
            <Col>
            <Form.Group className="mb-3" >
                <Form.Label className="formLabel1"  htmlFor="Message">Message</Form.Label>
                <Form.Control  className="field" as="textarea"  style={{ height: '100px' }}/>
            </Form.Group> 
            </Col>
           <Row className='recaptcha'>
            <Col >
            <Form.Group className="mb-3" >
    <Form.Check  type="checkbox" label="I'm not robot" />
  </Form.Group>
             </Col>
                <Col className="recaptcha_image">
                    <img className='recaptcha_image' src="https://www.gstatic.com/recaptcha/api2/logo_48.png"/>
                </Col>
            </Row>

            <Row className='submitButton'>
            <Col>
            <Button style={{borderRadius:"19px",width:"300px"}} size="lg" variant="primary">Send</Button>
            </Col>
            </Row>
            </Form>
           
      </Container>
      <FormBottom/>
      <Section2/>
      <Footer/>
    </>
  )
}

export default Form1

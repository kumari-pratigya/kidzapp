import React from 'react'
import { Container,Row,Col,Form,FormControl,Button } from 'react-bootstrap';
import './TvBanner.css'
const TvBanner = (props) => {
  return (
    <>
       <div className='TvBanner'>
          <Container>
              <Form>  
              <Row>
               
                  <Col md={10}>
                      <FormControl type="search" placeholder={props.placeholder}   aria-label="Search"  />           
                  </Col>
                  <Col  md={1}>
                  <Button className='Tvsearchbtn' variant="primary">Search</Button>           
                  </Col>
                 
              </Row>
             
              </Form>
          </Container>
      </div> 
    </>
  )
}

export default TvBanner

import React from 'react'
import {Container ,Row,Col} from 'react-bootstrap'
import './Section2.css'
const Section2 = () => {
  return (
    <>
      <Container className='section2Container'>
      <Row>
      <Col></Col>
        <Col md={3}>
        <img  src="https://drfsb8fjssbd3.cloudfront.net/images/subsc-baby.png" alt="Kidzapp Feed Image"/>
        </Col>
        <Col md={7} className="kidsFeetRight">
        <p class="kidFeedTitle">The Kidzapp Feed</p>
        <p>Receive regular updates and promotions from Kidzapp</p>
        <div className="kidsFeedForm">
<form action="//kidzapp.us16.list-manage.com/subscribe/post?u=b4a8fc17eba0011a1b314f7e7&amp;id=6fffc00da4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="">
<div id="mc_embed_signup_scroll">
<input type="email" value="" id="feed_email" name="EMAIL" class="email form-control" placeholder="Email address"/>
<a href="#" data-toggle="modal" data-target="#footer" title="view-footer" class="view-footer">
<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"/>
</a>
</div>
</form>
</div>
<Row >
  <Col md={4} className='kidsFeedValues'>
    <span className='feedValues'>2500 +</span>
    <p>Experience</p>
  </Col>
  <Col md={4} className='kidsFeedValues'>
  <span  className='feedValues'>500 +</span>
    <p>Venues and Events</p>
  </Col>
  <Col md={4} className='kidsFeedValues'>
  <span  className='feedValues'>1000 +</span>
    <p>Classes</p>
  </Col>
</Row>
        </Col>
        <Col></Col>
      </Row>
      </Container>
    </>
  )
}

export default Section2

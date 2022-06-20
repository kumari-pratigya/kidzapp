import React from 'react'
import { Container,Row,Col,Button,Carousel } from 'react-bootstrap'
import TvBanner from '../../component/TvBanner/TvBanner'
import Footer from '../../pages/Footer/Footer'
import TvCard from '../../component/TvCard/TvCard'
import Navbar from '../../pages/Navbar/Navbar'
import './KidzAppTv.css'
const KidzAppTv = () => {
  return (
    <>
    <Navbar/>
    <TvBanner placeholder="Type here to Search Video"/>
      <div className='kidzappTvHeading'>
      <Row>
           <Col>
               <h1> Kidzapp TV- Kids Activities</h1>
           </Col>
              </Row>
      <Container>
      <Carousel >
  <Carousel.Item interval={5000}>
  <img className='playImage' src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
  <img src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className='videoLikeIcon' data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
  <em className='videoShareIcon'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -22 512 511" width="45" height="41" class="" fill="#fff">
<g>
<path d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#fff"></path>
</g>
</svg>
</em>
  <video width="100%" controls>
  <source src="https://images.kidzapp.com/media/kidzapp_tv/videos/None_1c0742c8-ac24-43af-b108-5638d989089b.mp4" type="video/mp4"/>
   </video> 
  </Carousel.Item>

  <Carousel.Item interval={5000}>
  <img className='playImage' src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
  <img src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className='videoLikeIcon' data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
  <em className='videoShareIcon'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -22 512 511" width="45" height="41" class="" fill="#fff">
<g>
<path d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#fff"></path>
</g>
</svg>
</em>
  <video width="100%" controls>
  <source src="https://images.kidzapp.com/media/kidzapp_tv/videos/None_dd8ddc3e-be2d-4f40-9df8-8153db32e4cd.mp4" type="video/mp4"/>
  </video>
    <Carousel.Caption className="caraousalTvCaption">
    <h3>Toy Wash Fun | Fun &amp; Games</h3>
    <p>Fun &amp; Games</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={5000}>
  <img className='playImage' src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
  <img src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className='videoLikeIcon' data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
  <em className='videoShareIcon'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -22 512 511" width="45" height="41" class="" fill="#fff">
<g>
<path d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#fff"></path>
</g>
</svg>
</em>
  <video width="100%" controls>
  <source src="https://images.kidzapp.com/media/kidzapp_tv/videos/None_d3a2c98a-035d-411f-b900-0b51a23f5418.mp4" type="video/mp4"></source>
  </video>
  
    <Carousel.Caption className="caraousalTvCaption">
         <h3>Toy Wash Fun | Fun &amp; Games</h3>
         <p>Cooking</p>
    </Carousel.Caption>
  </Carousel.Item>
     </Carousel>
     <Row className="review_title">
      <Col><h2>Arts and Crafts</h2></Col>
      <Col><Button>See All</Button></Col>
    </Row>
    <TvCard/>
      </Container>
      </div>
      <Footer/>
    </>
  )
}

export default KidzAppTv

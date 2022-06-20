import React from 'react'
import  Images from '../../images/Images';
import {Card,Carousel,Row, Col}from 'react-bootstrap';
import './TvCard.css'
const TvCard = () => {
  return (
    <div >
       <div >
      <Carousel className='TvCard'>
  <Carousel.Item >
    <Card style={{overflow:'hidden', width:'280px',height:'350px', paddingBottom:'0px',borderRadius:'20px',boxShadow:'0px 1px 10px grey' }}>
    <Card.Img className='CardplayImage' src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
  <Card.Img src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className='videoLikeIcon' data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
    <Card.Img  variant="top" src={Images.TvCard} /> 
  <Carousel.Caption className='TvCardCaption'>
    <Card.Body >
    <Card.Title  className='TvcarousalTitle'>How to make a sailboat from a SPONGE! I Arts &amp; Crafts with Kidzapp</Card.Title>
   <Card.Text className="TvCardText">Arts and Crafts</Card.Text>
  </Card.Body>

  
          <Row style={{border:"1px solid grey"}}>
            <Col>
            <div style={{display:"inline-flex",left:"10px",position:"absolute",bottom:"5px"}}>
            <img className='tvLikeImage' alt="like" src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" data-src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" onclick="likeReview('6')" id="unlike_img_6" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
            <div style={{backgroundColor:"grey",width:"40px",borderRadius:"20px",marginLeft:"5px"}}>14</div>
            </div>
            </Col>

            <Col>
              <div style={{display:"inline-flex",left:"100px",position:"absolute",bottom:"5px"}}>
              <img src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" data-src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" class="review-list-img" alt="Comment Icon" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
              <div style={{backgroundColor:"grey" ,width:"40px",borderRadius:"20px",marginLeft:"5px"}}>7</div>
              </div>
            </Col>
            
            <Col>
               <div style={{display:"inline-flex",position:"absolute",left:"200px",bottom: "-8px"}}>
                  <p style={{color:"black"}}>Share</p>
                  <img style={{width:"25px",height:"25px"}}  src={Images.ShareIcon} alt="share" pagespeed_url_hash="1403219793" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
               </div> 
            </Col>
        </Row>
        
        
  </Carousel.Caption>
    
       
    </Card> 

    {/* <Card style={{ width: '18rem' }}> */}
    <Card style={{overflow:'hidden', width:'280px',height:'350px', paddingBottom:'0px',borderRadius:'20px',boxShadow:'0px 1px 10px grey' }}>
    <Card.Img className='CardplayImage' src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/> 
   <Card.Img src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className='videoLikeIcon' data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
    <Card.Img  variant="top" src={Images.tvCard2} /> 
  <Carousel.Caption  className='TvCardCaption'>
  <Card.Body>
    <Card.Title  className='TvcarousalTitle'>How to make a sailboat from a SPONGE! I Arts &amp; Crafts with Kidzapp</Card.Title>
    <Card.Text className='TvCardText'>
    Arts and Crafts
    </Card.Text>
  </Card.Body>
    <Row style={{border:"1px solid grey"}}>
    <Col>
            <div style={{display:"inline-flex",left:"10px",position:"absolute",bottom:"5px"}}>
            <img className='tvLikeImage' alt="like" src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" data-src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" onclick="likeReview('6')" id="unlike_img_6" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
            <div style={{backgroundColor:"grey",width:"40px",borderRadius:"20px",marginLeft:"5px"}}>14</div>
            </div>
            </Col>

            <Col>
              <div style={{display:"inline-flex",left:"100px",position:"absolute",bottom:"5px"}}>
              <img src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" data-src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" class="review-list-img" alt="Comment Icon" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
              <div style={{backgroundColor:"grey",width:"40px",borderRadius:"20px",marginLeft:"5px"}}>7</div>
              </div>
            </Col>
            
            <Col>
               <div style={{display:"inline-flex",position:"absolute",left:"200px",bottom:"-8px"}}>
                  <p style={{color:"black"}}>Share</p>
                  <img style={{width:"25px",height:"25px"}}  src={Images.ShareIcon} alt="share" pagespeed_url_hash="1403219793" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
               </div> 
            </Col>       
    </Row>
  </Carousel.Caption>
</Card>

<Card style={{overflow:'hidden', width:'280px',height:'350px', paddingBottom:'0px',borderRadius:'20px',boxShadow:'0px 1px 10px grey' }}>
    <Card.Img className='CardplayImage' src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/> 
   <Card.Img src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className='videoLikeIcon' data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
    <Card.Img  variant="top" src={Images.tvCard3} /> 
  <Carousel.Caption  className='TvCardCaption'>
  <Card.Body>
    <Card.Title  className='TvcarousalTitle'>How to make a sailboat from a SPONGE! I Arts &amp; Crafts with Kidzapp</Card.Title>
    <Card.Text className='TvCardText'>
    Arts and Crafts
    </Card.Text>
  </Card.Body>
        <Row style={{border:"1px solid grey"}}>
        <Col>
            <div style={{display:"inline-flex",left:"10px",position:"absolute",bottom:"5px"}}>
            <img className='tvLikeImage' alt="like" src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" data-src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" onclick="likeReview('6')" id="unlike_img_6" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
            <div style={{backgroundColor:"grey",width:"40px",borderRadius:"20px",marginLeft:"5px"}}>14</div>
            </div>
            </Col>

            <Col>
              <div style={{display:"inline-flex",left:"100px",position:"absolute",bottom:"5px"}}>
              <img src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" data-src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" class="review-list-img" alt="Comment Icon" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
              <div style={{backgroundColor:"grey",width:"40px",borderRadius:"20px",marginLeft:"5px"}}>7</div>
              </div>
            </Col>
            
            <Col>
               <div style={{display:"inline-flex",position:"absolute",left:"200px",bottom:"-8px"}}>
                  <p style={{color:"black"}}>Share</p>
                  <img style={{width:"25px",height:"25px"}}  src={Images.ShareIcon} alt="share" pagespeed_url_hash="1403219793" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
               </div> 
            </Col>
        </Row>
  </Carousel.Caption>
</Card>


 </Carousel.Item>

 <Carousel.Item >
 <Card style={{overflow:'hidden', width:'280px',height:'350px', paddingBottom:'0px',borderRadius:'20px',boxShadow:'0px 1px 10px grey' }}>
    <Card.Img className='CardplayImage' src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/> 
   <Card.Img src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className='videoLikeIcon' data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
    <Card.Img  variant="top" src={Images.tvCard4} /> 
  <Carousel.Caption  className='TvCardCaption'>
  <Card.Body>
    <Card.Title  className='TvcarousalTitle'>How to make a sailboat from a SPONGE! I Arts &amp; Crafts with Kidzapp</Card.Title>
    <Card.Text className='TvCardText'>
    Arts and Crafts
    </Card.Text>
  </Card.Body>
  <Row style={{border:"1px solid grey"}}>
  <Col>
            <div style={{display:"inline-flex",left:"10px",position:"absolute",bottom:"5px"}}>
            <img className='tvLikeImage' alt="like" src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" data-src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" onclick="likeReview('6')" id="unlike_img_6" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
            <div style={{backgroundColor:"grey",width:"40px",borderRadius:"20px",marginLeft:"5px"}}>14</div>
            </div>
            </Col>

            <Col>
              <div style={{display:"inline-flex",left:"100px",position:"absolute",bottom:"5px"}}>
              <img src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" data-src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" class="review-list-img" alt="Comment Icon" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
              <div style={{backgroundColor:"grey",width:"40px",borderRadius:"20px",marginLeft:"5px"}}>7</div>
              </div>
            </Col>
            
            <Col>
               <div style={{display:"inline-flex",position:"absolute",left:"200px",bottom:"-8px"}}>
                  <p style={{color:"black"}}>Share</p>
                  <img style={{width:"25px",height:"25px"}}  src={Images.ShareIcon} alt="share" pagespeed_url_hash="1403219793" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
               </div> 
            </Col>        
  </Row>
  </Carousel.Caption>
</Card>

<Card style={{overflow:'hidden', width:'280px',height:'350px', paddingBottom:'0px',borderRadius:'20px',boxShadow:'0px 1px 10px grey' }}>
    <Card.Img className='CardplayImage' src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/> 
   <Card.Img src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className='videoLikeIcon' data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
    <Card.Img  variant="top" src={Images.tvCard5} /> 
  <Carousel.Caption  className='TvCardCaption'>
  <Card.Body>
    <Card.Title  className='TvcarousalTitle'>How to make a sailboat from a SPONGE! I Arts &amp; Crafts with Kidzapp</Card.Title>
    <Card.Text className='TvCardText'>
    Arts and Crafts
    </Card.Text>
  </Card.Body>
  <Row style={{border:"1px solid grey"}}>
  <Col>
            <div style={{display:"inline-flex",left:"10px",position:"absolute",bottom:"5px"}}>
            <img className='tvLikeImage' alt="like" src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" data-src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" onclick="likeReview('6')" id="unlike_img_6" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
            <div style={{backgroundColor:"grey",width:"40px",borderRadius:"20px",marginLeft:"5px"}}>14</div>
            </div>
            </Col>

            <Col>
              <div style={{display:"inline-flex",left:"100px",position:"absolute",bottom:"5px"}}>
              <img src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" data-src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" class="review-list-img" alt="Comment Icon" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
              <div style={{backgroundColor:"grey",width:"40px",borderRadius:"20px",marginLeft:"5px"}}>7</div>
              </div>
            </Col>
            
            <Col>
               <div style={{display:"inline-flex",position:"absolute",left:"200px",bottom:"-8px"}}>
                  <p style={{color:"black"}}>Share</p>
                  <img style={{width:"25px",height:"25px"}}  src={Images.ShareIcon} alt="share" pagespeed_url_hash="1403219793" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
               </div> 
            </Col>    
  </Row>
  </Carousel.Caption>
</Card>

<Card style={{overflow:'hidden', width:'280px',height:'350px', paddingBottom:'0px',borderRadius:'20px',boxShadow:'0px 1px 10px grey' }}>
    <Card.Img className='CardplayImage' src="https://drfsb8fjssbd3.cloudfront.net/images/play-icon-large-kd-new.svg" id="myplay33" pagespeed_url_hash="1333257139" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/> 
   <Card.Img src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" className='videoLikeIcon' data-src="https://drfsb8fjssbd3.cloudfront.net/images/heart-v1.svg" alt=""  id="heart1_32" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
    <Card.Img  variant="top" src={Images.tvCard6} /> 
  <Carousel.Caption  className='TvCardCaption'>
  <Card.Body>
    <Card.Title  className='TvcarousalTitle'>How to make a sailboat from a SPONGE! I Arts &amp; Crafts with Kidzapp</Card.Title>
    <Card.Text className='TvCardText'>
    Arts and Crafts
    </Card.Text>
  </Card.Body>
  <Row style={{border:"1px solid grey"}} >
  <Col>
            <div style={{display:"inline-flex",left:"10px",position:"absolute",bottom:"5px"}}>
            <img className='tvLikeImage' alt="like" src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" data-src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" onclick="likeReview('6')" id="unlike_img_6" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
            <div style={{backgroundColor:"grey",width:"40px",borderRadius:"20px",marginLeft:"5px"}}>14</div>
            </div>
            </Col>

            <Col>
              <div style={{display:"inline-flex",left:"100px",position:"absolute",bottom:"5px"}}>
              <img src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" data-src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" class="review-list-img" alt="Comment Icon" pagespeed_url_hash="1435827137" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/>
              <div style={{backgroundColor:"grey",width:"40px",borderRadius:"20px",marginLeft:"5px"}}>7</div>
              </div>
            </Col>
            
            <Col>
               <div style={{display:"inline-flex",position:"absolute",left:"200px",bottom:"-8px"}}>
                  <p style={{color:"black"}}>Share</p>
                  <img style={{width:"25px",height:"25px"}}  src={Images.ShareIcon} alt="share" pagespeed_url_hash="1403219793" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
               </div> 
            </Col>        
  </Row>
  </Carousel.Caption>
</Card>
 </Carousel.Item>
 </Carousel> 
</div>
    </div>
  )
}

export default TvCard

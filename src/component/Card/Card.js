import React, { useEffect,useState } from 'react'
import {Button,Card,Carousel,Row,Col} from 'react-bootstrap'
import  Images from '../../images/Images'
import './Card.css';
import axios from 'axios';
import {card_API} from '../../Config/util'
const Card1 = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get(card_API)
    .then(response=>{
     const Data=response.data.results;
     setData(Data);
     console.log(Data);
    })
    .catch(error=>{
      console.log("error");
    })
    },[])
  return (
    <>
    <div className='Carousal-container container-fluid'>
      <Carousel className='card-caraousal'>
  <Carousel.Item >
  {
    data.map((post)=>(
      <Card style={{ width:'250px',height:'350px',borderRadius:'20px',boxShadow:'1px 1px grey' }}>
    <Card.Img  variant="top" src={post.image_url} />
    <Card.Img style={{width:"80px", height:"60px",position:'absolute'}} className='dealImage' src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg" alt="Deal"/>
  <Carousel.Caption>
    <Card.Body style={{width:"200px"}}>
    <Card.Title  className='carousalTitle'>{post.title}</Card.Title>
    <Card.Text className="CardText">
    {post.address}
    </Card.Text>
    <div className='label'>
    <img className='labelimage' src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg" alt="Star Image"/>
    <span className='labeltext'>{Math.round(post.average_rating).toFixed(1)}</span>
    </div>
    <div className='bottom-card'>
    <Row className='card-left'>
        <Col>
            <Button className='Booking' variant="primary">Book Now</Button>
        </Col>  
      </Row>
    </div>  
  </Card.Body>
  </Carousel.Caption>
    </Card> 
  ))
  }
    
  
 </Carousel.Item>
 </Carousel>
<button className="viewAllBtn"> View All</button>  
</div>
    </>
  )
}

export default Card1

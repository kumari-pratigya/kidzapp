import React ,{useState,useEffect}from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import Slider from "react-slick";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CardSlider.css'
import{CardSlider_API} from '../../Config/util'
const CardSlider = () => {
  const  [data,setData]=useState([]);
  useEffect(()=>{
    axios.get(CardSlider_API)
    .then(response=>{
     const Data=response.data;
     setData(Data);
      console.log(Data);
      console.log("successful!");
    })
    .catch(error=>{
      console.log("error");
    })
    },[])
  const settings = {
    dots:false,
    infinite: true,
    speed:500,
    slidesToShow:3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:2,
          slidesToScroll:1,
          initialSlide: 1
        }
    },
      {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1
        }
      },

    ]
  }
  
   
  return (
    <div className='cardSliderSection'>
        <div className="CardHeading">
        <h1>Kids Activities Reviews by Real Parents</h1>
        </div>
    <Container className="cardSlider">
    <Row>
    <Slider {...settings}>
      
        {
      data.map(post=>(
        <Col className="card1">
        <p className="venue">{post.venue.title}</p>
            <span class="reviewTitle">{post.title} </span>
            <hr className='cardLine'/>
           <p className='cardparagraph'>{post.review} </p>
           <div className="cardBottom">
           <div className='cardLeft'>
           <p>{post.first_name}</p>
           <p class="month-ago">18 month ago</p>
           </div>
           <div className='Cardlabel'>
              <img className='Cardlabelimage' src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg" alt="Star Image"/>
              <span className='Cardlabeltext'>{post.rating}</span>
          </div>
           </div>
           </Col>

      ))
        }
        </Slider>
        </Row>
    </Container>
    <button className="CardviewAllBtn"> View All</button>  
    </div>
  )
}

export default CardSlider

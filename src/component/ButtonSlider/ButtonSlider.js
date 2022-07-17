import React,{useState,useEffect} from 'react'
import {Row,Col,Button,Card} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {button_Slider_API} from '../../Config/util'
import axios from 'axios';
import './ButtonSlider.css';

const ButtonSlider = () => {
  const  [data,setData]=useState([]);
  const[cards,setCards]=useState([]);
  const [btnName,setBtnName]=useState("featured_kidzapp_deal");
  useEffect(()=>{
  axios.get(`https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=${btnName}&country_code=&page=1&page_size=10&city=&website=1`)
  .then(response=>{
   ;
   console.log('response',response.data.results);
   setCards(response.data.results);  
   console.log(btnName);
  })
  .catch(error=>{
    console.log("error");
  })

      },[btnName]);
      console.log('cards',cards);

    useEffect(()=>{
      axios.get(button_Slider_API)
      .then(response=>{
       const Data=response.data;
       setData(Data);
      })
      .catch(error=>{
        console.log("error");
      })
      },[])
  const settings = {
    dots:false,
    infinite: true,
    // arrows : false,
    speed:500,
    slidesToShow:5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:3,
          slidesToScroll:1,
          initialSlide: 1
        }
    },
      {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]
  };
 

  const CardShow = {
    dots:true,
    infinite:false,
    speed:500,
    slidesToShow:3,
    slidesToScroll: 1,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow:2,
        slidesToScroll:4,
        initialSlide: 1
      }
  },
    {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
    }
  },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrow:false,
        slidesToScroll: 1,
      }
    },

  ]
}
  
  
  return (
    <>
    <div className='ButtonSliderContainer'>
     <Row>
      <Slider className='button_slider' {...settings} >
      {
      data.map(post=>{
        return(
        <Col>
          <Button onClick={()=>setBtnName(post.internal_name)}  className='activeButton'> {post.name}</Button>
        </Col>   
        )
      })
      }
    </Slider>
    </Row>

    <Row>
      <Slider className='card_slider'  {...CardShow}> 
      {
        cards.map((post)=>{
          return(
          <Col style={{display:"inline-block"}}>
          <Card className='buttonCard'>
    <Card.Img className='CardImage' variant="top" src={post.image_url} />
    <Card.Img  className='dealImage' src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg" alt="Deal"/>
    <Card.Body className='buttonCardBody'>
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
            <Button className='Booking'>Book Now</Button>
        </Col>  
      </Row>
    </div>  
  </Card.Body>
    </Card> 
</Col>
          )
        })

      } 
     </Slider>
     </Row> 
    
  

<button className="viewAllBtn"> View All</button>  
</div>
    </>
  )
}

export default ButtonSlider

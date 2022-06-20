import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderSection.css';
import axios from 'axios';
const SliderSection = () => {
    const  [data,setData]=useState([]);
    useEffect(()=>{
      axios.get("https://api2.kidzapp.com/api/3.0/categories?country_code=ae",data)
      .then(response=>{
       const Data=response.data;
       setData(Data);
        console.log(Data);
        console.log("successful card");
      })
      .catch(error=>{
        console.log("error");
      })
      },[])
    const settings = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow:2,
              slidesToScroll:1,
              initialSlide: 1
            }
        },
      //   {
      //     breakpoint: 900,
      //     settings: {
      //       slidesToShow:2,
      //       slidesToScroll:1,
      //       initialSlide: 1
      //     }
      // },
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
      const content = {
        dots:false,
        infinite: true,
        speed: 500,
        slidesToShow:6,
        slidesToScroll:1,
        
      };

  return (
    <>
    <Container fluid className='SliderSection'>
    <Row >
    <Col md={12}>
    <h2 className='SliderSectionHeading'>Kidzappolis</h2>
    </Col>
    </Row>

    <Row className='SliderSectionCard1Row'>
    <Slider {...settings}>
    {
      data.map(post=>(
         
        <Col>
        <div className='SliderSectionCard1'>
        <img src={post.image_url} alt="Kidzappolis Image"/>
        </div>
        <p className='SliderSectionParagraph'>{post.alternative_name}</p>
    </Col>
    ))
  }
    
     </Slider>
        </Row>

        <Row >
    <Col md={12}>
    <h1 className='SliderSectionHeading'>Kidzapproved Collections</h1>
    </Col>
    </Row>

    <Row style={{marginLeft:"170px",marginRight:"170px"}}>
    <Slider {...content}>

    <Col>
    <div className="SliderSectionCard2">
         <img src="https://images.kidzapp.com/media/lists/Spend_Your_Cashback_On_This_0cfda097-08ce-485a-b9f5-8c5e5758ad1c.jpg" alt="KidzCollection Image" class="lazy"/>
        <span className='SliderSectionText'>How To Spend Your Cashback - Top Picks</span>
    </div>
    </Col>   
    <Col>
    <div  className="SliderSectionCard2">
        <img src="https://images.kidzapp.com/media/lists/Fun_For_AED_50_Or_Less_ab3830af-b472-466c-b229-7a7dcfdc3a26.jpg" alt="KidzCollection " class="lazy"/>
        <span className='SliderSectionText'> Fun For AED 50 Or Less</span>
    </div>
    </Col>

    <Col  >
    <div className="SliderSectionCard2">
    <img src="https://images.kidzapp.com/media/lists/c5c3ecbc-a326-4a01-ae1f-90500caf54a9.jpg" alt="KidzCollection Image" class="lazy"/>
    <span className='SliderSectionText'>Play &amp; Attraction Deals</span>
    </div>
   
    </Col>
    <Col >
    <div  className="SliderSectionCard2">
    <img src="https://images.kidzapp.com/media/lists/Weekday_Deals_Not_To_Miss_cf50f82d-0a0e-4477-9d32-8d7b70d64b29.jpg" alt="KidzCollection Image" class="lazy"/>
    <span className='SliderSectionText'> Weekday Deals Not To Miss</span>
    </div>
    </Col>

    <Col >
    <div className="SliderSectionCard2">
    <img src="https://images.kidzapp.com/media/lists/SupperClub_Offers_fdeff72c-5f00-4450-add2-3f465acded97.jpg" alt="KidzCollection Image" class="lazy"/>
    <span className='SliderSectionText'>SupperClub Offers</span>
    </div>
    </Col>

    <Col >
    <div className="SliderSectionCard2">
    <img src="https://images.kidzapp.com/media/lists/Birthday_Deals__Picks_f8d8950c-1b18-4841-b466-a513745abf25.jpg" alt="KidzCollection Image" class="lazy"/>
    <span className='SliderSectionText'>Birthday Deals &amp; Picks</span>
    </div>
    </Col>

    <Col >
    <div className="SliderSectionCard2">
        <img src="https://images.kidzapp.com/media/lists/0889ea35-9cd5-4558-bfa7-1861ace029ba.jpg" alt="KidzCollection Image" class="lazy"></img>
        <span className='SliderSectionText'>Family Shopping For Less</span>
    </div>
    </Col>
   
    <Col>
    <div className="SliderSectionCard2">
     <img src="https://images.kidzapp.com/media/lists/64ea5802-2f8b-11ea-98b7-fa2c3f187b01attractions.png" alt="KidzCollection Image" class="lazy"/>
     <span className='SliderSectionText'>DEALS: Big Attractions</span>
    </div>
     </Col>

    

   
        </Slider>
        </Row>
    </Container>  
    </>
  )
}

export default SliderSection

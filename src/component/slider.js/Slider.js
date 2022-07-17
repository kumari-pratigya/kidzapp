import React,{useEffect, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import axios from 'axios';
import {Slider_API} from '../../Config/util';

const Banner = () => {
  const  [data,setData]=useState([]);
  
  useEffect(()=>{
    axios.get(Slider_API,data)
    .then(response=>{
     const Data=response.data.results;
     setData(Data);
      console.log(Data);
      console.log("successful");
    })
    .catch(error=>{
      console.log("error");
    })
    })

    const settings = {
      arrows:false,
      dots:true,
      infinite: true,
      speed:500,
      slidesToShow:1,
      slidesToScroll:1
    }; 
  return (
    <div className='slider'>
     <Slider {...settings}>
    {
      data.map(post=>(
        <div key={post.id} className='slider_item'>
        <img alt="image"  src={post.image_url}/>
        <div className='BannerContent'>
         <h2 className='caraousalheading'>{post.title}</h2>
         <p  className='caraousalPara'>{post.description} </p>
        <button className='caraousalButton'>Book Now</button>
       </div>
    </div>
    ))
  }
  </Slider>
    </div>
    )
  }
  export default Banner;
 
       /* <div className="slider">
      <Carousel >
  <Carousel.Item interval={1000}> 
   
     <Carousel.Caption className="caraousalCaption"> 
     
    </Carousel.Caption>
  </Carousel.Item> */
//    <Carousel.Item interval={500}>
//     <img
//       className="d-block w-100"
//       src={post.city.country.image_url}
//       alt="Second slide"
//       height="500px"
//     />
//     <Carousel.Caption  className="caraousalCaption">
//       <h1  className='caraousalheading'>{post.title} </h1>
//       <p className='caraousalPara'>{post.description} </p>
//       <Button className='caraousalButton'> Book Now</Button>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src={post.city.country.image_url}
//       alt="Third slide"
//       height="500px"
//     />
//     <Carousel.Caption  className="caraousalCaption">
//       <h1  className='caraousalheading'> {post.title}</h1>
//       <p className='caraousalPara'>{post.description} 
// </p>
//   <Button className='caraousalButton'> Book Now</Button>
//     </Carousel.Caption>
//   </Carousel.Item>  </Carousel>

//     </div> */}
      // )) 
  


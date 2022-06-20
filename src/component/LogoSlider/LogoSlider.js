import React from 'react';
import {Container} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LogoSlider.css'
const LogoSlider = () => {
    const data =[
      {
        id:1,
        image:"https://drfsb8fjssbd3.cloudfront.net/images/the-national.png",
      },
      {
        id:2,
        image:"https://drfsb8fjssbd3.cloudfront.net/images/khaleej-times.png",
      },
      {
        id:3,
        image:"https://drfsb8fjssbd3.cloudfront.net/images/dubai-tv.png",
      },
      {
        id:4,
        image:"https://drfsb8fjssbd3.cloudfront.net/images/lovin-dubai.png",
      },
      {
        id:5,
        image:"https://drfsb8fjssbd3.cloudfront.net/images/dubai-eye.png",
      },
      {
        id:6,
        image:"https://drfsb8fjssbd3.cloudfront.net/images/the-national.png",
      },
      {
        id:7,
        image:"https://drfsb8fjssbd3.cloudfront.net/images/khaleej-times.png",
      },
      {
        id:8,
        image:"https://drfsb8fjssbd3.cloudfront.net/images/dubai-tv.png",
      }
]
    const settings = {
        dots:false,
        infinite: true,
        speed:500,
        slidesToShow:3,
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
      }
  return (
    <>
      <div className='logoSlider'>
        <div className='LOgoSliderHeading'>
        <h1>As Featured in</h1>
        </div>
          <Container>
        
          <Slider className='logoSlider1' {...settings}>
          {data.map((post)=>(
            <div key={post.id} className='logoColumn'>
          <img  src={post.image} />
          </div>  
          ))
          }
        
         </Slider>
         

          </Container>
      </div>
    </>
  )
}

export default LogoSlider

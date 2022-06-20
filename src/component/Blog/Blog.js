import React,{useEffect,useState} from 'react'
import Navbar from '../../pages/Navbar/Navbar'
import Footer from '../../pages/Footer/Footer'
import TvBanner from '../../component/TvBanner/TvBanner'
import Section2 from '../Section2/Section2'
import { Container,Card,Row,Col,Button } from 'react-bootstrap'
import { blog_API } from '../../Config/util'
import './Blog.css'
import axios from 'axios'
const Blog = () => {
  const[data,setData]=useState([]);
  // const[tab,setTab]=useState([]);
  
  // useEffect(()=>{
  //   axios.get("https://api2.kidzapp.com/api/3.0/blogs/categories?country_code=ae ",data)
  //   .then(response=>{
  //    const Data=response.data;
  //    setTab(Data);
  //    console.log(Data);
  //   })
  //   .catch(error=>{
  //     console.log("error");
  //   })
  //   },[tab])
 const button=[
    {
      id:1,
      image:"https://beta.kidzapp.com/images/btn-01.png",
      text:"Arts & Crafts",
      icon:"https://drfsb8fjssbd3.cloudfront.net/images/right-arrow.svg", 
    },
    {
      id:2,
      image:"	https://beta.kidzapp.com/images/btn-02.png",
      text:"Kids Activities",
      icon:"https://drfsb8fjssbd3.cloudfront.net/images/right-arrow.svg", 
    },
    {
      id:3,
      image:"	https://beta.kidzapp.com/images/btn-03.png",
      text:"Parenting",
      icon:"https://drfsb8fjssbd3.cloudfront.net/images/right-arrow.svg", 
    },
    {
      id:4,
      image:"	https://beta.kidzapp.com/images/btn-02.png",
      text:"Health & Nutrition",
      icon:"https://drfsb8fjssbd3.cloudfront.net/images/right-arrow.svg", 
    },
  ]
  useEffect(()=>{
    axios.get( blog_API)
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
    <div>
     <Navbar/>
     <TvBanner placeholder="Type here to Search Blog"/>,
     <div>
       <Row>  
            <>
            {
            button.map((post)=>(
              <Col >
              <img className='BlogButton' src={post.image}/>
              <span className='BlogButtonParagraph'> {post.text}</span>
            </Col>
            ))
            }
            {/* <Col >
           <div className='BlogButton1' width="200px" height="40px" src="">
            <p>Arts &amp; Crafts</p> 
              </div>
            </Col>
            <Col >
           <div className='BlogButton2' width="200px" height="40px" src="">
            <p>Arts &amp; Crafts</p> 
              </div>
            </Col>
             <Col >
           <div className='BlogButton3' width="200px" height="40px" src="">
            <p>Arts &amp; Crafts</p> 
              </div>
            </Col> */}

            </>
        
       </Row>
     </div>
    <div className='blogHeading'>
        <h1> The Kz Blog</h1>
        <h5>Your source for everything related to Arts & Crafts, Kids Activities, Parenting and Health & Nutrition.</h5>
        <Row>   
  {
    data.map((post)=>(
      <Col>
      <Card id={post.id} style={{ width:'300px',boxShadow: "2px 2px 10px rgb(0 0 0 / 20%)",marginTop:"10px" }}>
    <Card.Img className="blogImage" variant="top" src={post.cover_image} />
    <Card.Body>
    <Card.Title className='blogTitle' >{post.title}</Card.Title>
    <Row style={{width:"100%"}}>
    <Col md={4} style={{padding:"0px 0px 0px 0px"}}> <Card.Text>Dec 1,2020</Card.Text>  </Col>
       <Col md={8} style={{padding:"0px 0px 0px 0px"}}>  <Card.Text>Posted by:{post.auther_name}  </Card.Text> </Col>
    </Row>
    <Card.Text className='BlogParagraph'> {post.body}</Card.Text>
    <a className='blogLink'>Read More</a>
  </Card.Body>
    </Card> 
    </Col>
  ))
 
  }
  </Row>
    
    </div>
    <Section2/>
    <Footer/>
    </div>
  )
}

export default Blog

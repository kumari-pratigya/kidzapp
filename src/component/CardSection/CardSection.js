import React,{useState,useEffect} from 'react'
import './CardSection.css'
import Images from '../../images/Images'
import {Card,Row,Col,Container} from 'react-bootstrap'
import axios from 'axios';
import {CardSection_API} from '../../Config/util';
const CardSection = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get(CardSection_API)
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
      <Container fluid className="cust-container">

      {/* first row ---------*/}
<Row className='cardSectionHeading '>
<Col>
<h2>Our Blog Picks</h2>
</Col>
</Row>
<Row  className='blogs px-5'>
{
  data.map((post,i)=>{
    return(
      <>
      {(i===0 || i===5)?
   <Col  md={8} >
<Card  className='Sectioncards1' >
  <Card.Img style={{borderRadius:"19px 19px 0px 0px"}} variant="top" src={post.cover_image} />
  <Card.Body>
    <Card.Title><h3 className='CardTitle'>{post.title} </h3></Card.Title>
    <Card.Text style={{bottom:"20px",position:"absolute"}}  className="horizontalLine1">
    <hr />
    <p className='KidzappTeam'>{post.auther_name}</p>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
    
    
    :

      <Col  md={4}>
<Card  className='Sectioncards1'>
  <Card.Img style={{borderRadius:"20px 20px 0px 0px",height:"150px"}} variant="top" src={post.cover_image} />
  <Card.Body>
    <Card.Title><h3 className='CardTitle'>{post.title} </h3></Card.Title>
    <Card.Text style={{bottom:"0px",position:"absolute"}} className="horizontalLine1">
    <hr />
    <p className='KidzappTeam'>{post.auther_name}</p>
    </Card.Text>
  </Card.Body>
</Card> 
</Col>

 }
</>

    )
})
}

</Row>

{/* second row ------*/}


<button className="CardSectionviewAllBtn"> View All</button>  
</Container>

    </>
  )
}

export default CardSection;

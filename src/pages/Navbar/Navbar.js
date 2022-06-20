import React from 'react'
import { Navbar,NavDropdown,Nav,Form,Row,Col,FormControl,Container} from 'react-bootstrap';
import Images from '../../images/Images';
 import {FaUserCircle} from 'react-icons/fa'
import{BiSearch} from 'react-icons/bi'
import './Navbar.css'

const Header = () => {
  return (
    <>
     <Navbar className='navbar'  expand="lg">
    <Navbar.Brand href="#" className='.navbar-brand'><img src={Images.logo} width="100" height="100" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
       
        navbarScroll
      >
      <Container fluid>
      <Row className='first-row'>
    <Col>
      <NavDropdown className="search-By" title="Search By" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        </Col>
        <Col>
      <Form className="d-flex search">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 searchbtn "
          aria-label="Search"
        />  
     
      <div className='searchIcon'>
      <BiSearch/>
      </div>
      </Form>
      </Col>
      
        <Col>
        <NavDropdown className=' download-app' title="Download App" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        </Col>
        <Col>
        <div className=' uae '>
        <img className='uaeimg' width="20px" height="20px" src="https://drfsb8fjssbd3.cloudfront.net/images/Flag-UAE.svg" alt="Flag Image" pagespeed_url_hash="2328544346" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"></img>
        <NavDropdown className='uaeDropdown'   title="UAE" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        </div>
        </Col>
        <Col>
        <div className='user'>
        <FaUserCircle/>
        </div>
        </Col>
        </Row>
      
        <Row  className='second-row'>
       
        <Col className='activity'>
        
        <Nav.Link href="#action1">Find Ativities</Nav.Link>
       
        </Col>
        <Col className='blog'>
       
        <Nav.Link href="/blog" >Blog</Nav.Link>
        
        </Col>
        <Col className='awards'>
        
        <Nav.Link href="/blog">kidzApp Awards</Nav.Link>
      
        </Col>
        <Col className='tv' >
       
        <Nav.Link href="/kidzappTv">kidzApp Tv</Nav.Link>
       
        </Col>
        <Col className='getintouch' >
        
        <Nav.Link href="/getInTouch">Get In Touch</Nav.Link>
      
        </Col>
        <Col>
        <div className=' listed'>
        <Nav.Link href="/getlist">Get Listed</Nav.Link>
        </div>
        </Col>
         </Row>
         </Container>
      </Nav>
      
    </Navbar.Collapse>
</Navbar> 
    </>
  )
}

export default Header

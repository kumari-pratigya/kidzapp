import React from 'react'
import {BsFacebook,BsYoutube,BsWhatsapp,BsInstagram} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import './Footer.css'
import {Row,Col} from 'react-bootstrap'
const Footer = () => {
  return (
    <>
      <div className='main-footer'>
        <div className='container-fluid'>
            <Row >
            <Col></Col>
                <Col className='FooterColumn'>
                    <h6 className="footerheading">Kids Activities by Category</h6>  
                    <ul className='Footerlist'>
                   <li  className='paragraph'> Exclusively on Kidzapp</li>
                   <li className='paragraph'> Spring Fun</li>
                   <li className='paragraph'> Afterschool Activities</li>
                   <li className='paragraph'> Animal Fun</li>
                   <li className='paragraph'>  Art, Music & Dance   </li>                
                    </ul>
                </Col>
                <Col>
                    <h6 className="footerheading">Kids Activities by Category</h6>
                    <ul className='Footerlist'>
                    <li className='paragraph'> Baby & Toddler</li>  
                    <li className='paragraph'> Birthdays</li>  
                    <li className='paragraph'> Courses, Camps &</li> 
                    <li className='paragraph'> Workshops</li>    
                    <li className='paragraph'> Eat Out</li> 
                    <li className='paragraph'>Explore The City</li>  
                    </ul>
                </Col>
                <Col>
                <h6 className="footerheading">Family activity</h6>
                <ul className='Footerlist'>
                    <li className='paragraph'> Venues</li>  
                    <li className='paragraph'>Courses</li>   
                    <li className='paragraph'>Events</li>  
                  </ul>
                </Col>
                <Col>
                    <h6 className="footerheading">Others</h6> 
            <ul className='Footerlist'>
                 <li className='paragraph'> Find Activities</li>
                 <li className='paragraph'> Our Story</li>
                 <li className='paragraph'> About The App</li>
                 <li className='paragraph'> Get In Touch</li>
                 <li className='paragraph'> Blog</li>
                 <li className='paragraph'>Site Map</li>
                 </ul>
                </Col>

                <Col>
                    <h6 className="footerheading">Available on</h6> 
                    <Col><img width="120px" height="100px"  src="https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-app-store.svg" alt="Kidzapp Appstore"/>
             <a target="_blank"  href="https://play.google.com/store/apps/details?id=com.kidzapp">
             <img src="https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-google-play.svg" width="120px" height="100px" alt="Kidzapp Google Play"/></a>
                </Col>
                </Col>
                <Col></Col>
            </Row>

            <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
            <h6 className="footerheading">Indoor / Outdoor Kids activity</h6> 
            <ul className='Footerlist'>
            <li className='paragraph'>Indoor </li>
            <li>Outoor </li>
            </ul>
            </Col>

            
            <Col className='LegalColumn'>
            <h6 className="footerheading">Legal</h6> 
            <ul className='Footerlist'>
            <li className='paragraph'>Privacy Policy </li>
            <li> Terms and Conditions</li>
            <li>Cancellation Policy</li>
            </ul>
            </Col>
            

            <Col className='footericon'>
            <h6 className="footerheading">Follow us on</h6> 
            <Row>
            <Col><BsInstagram className='BsInstagram'/></Col>
          <Col><BsFacebook className='BsFacebook'/></Col> 
          <Col> <BsWhatsapp className='BsWhatsapp'/></Col>
           <Col><BsYoutube className='BsYoutube'/></Col>
           </Row>
            </Col>
            <Col ></Col>
            </Row>
            <hr/>
            <Row className=' footerbottom'>
            <Col></Col>
           <Col md={4} className='footerbottomparagraph'>Copyright © 2022 kidzapp.com. All Rights Reserved</Col> 
           <Col></Col>
           <Col></Col>
           <Col style={{marginRight:"80px"}}><img  className='VisaCard' src="https://drfsb8fjssbd3.cloudfront.net/images/new-visa.svg" alt="Visa Image"/>
            <img className='masterCard' src="https://drfsb8fjssbd3.cloudfront.net/images/new-mc.svg" alt="MasterCard Image"/>
            </Col>
            <Col> <img className='whatsappImg' src="https://drfsb8fjssbd3.cloudfront.net/images/whatsapp_optimized.png" alt="Whatsapp Image"/>
            </Col>
            </Row>
        </div>
    </div> 
    </>
  )
}

export default Footer

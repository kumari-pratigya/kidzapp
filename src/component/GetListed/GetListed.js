import React from 'react'
import { Col, Container, Row,Form ,Button} from 'react-bootstrap'
import Section2 from '../Section2/Section2'
import Footer from '../../pages/Footer/Footer'
import Navbar from '../../pages/Navbar/Navbar'
import './GetListed.css'
const GetListed = () => {
  return (
    <div>
        <Navbar/>
    <section className="get_listed-banner">
<div class="container get-listed-container">
<div class="row">
<div class="col-md-12">
<div class="wrapperList">
    <h1>Get Listed on Kidzapp</h1>
    <h2>Expand your reach by listing your business with us. Simply fill out the form below and you'll hear back from us very soon.</h2>
</div>
</div>
</div> 
</div>
</section>

<div className='form_Section'>
    <Container>
        <Row>
            <Col md={10}>
            <h4>Experience Information</h4>
            </Col>
        </Row>
        <Form className='getListForm'>
          <Row>
          
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label className="formLabel" htmlFor="Firstname">Type*</Form.Label>
                        <Form.Select className='field' aria-label="Default select example">
                            <option>-</option>
                            <option value="1">Course</option>
                            <option value="2">Venue</option>
                            <option value="3">Event</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
                <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label className="formLabel" htmlFor="Firstname">City</Form.Label>
                        <Form.Select  className='field' aria-label="Default select example">
                            <option>-</option>
                           <option value="Dubai">Dubai</option>
                           <option value="Al Ain">Al Ain</option>
                           <option value="Fujairah">Fujairah</option>
                           <option value="Abu Dhabi">Abu Dhabi</option>
                           <option value="Ajman">Ajman</option>
                            <option value="Sharjah">Sharjah</option>
                            <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                            <option value="Umm Al Quwain">Umm Al Quwain</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        <Row>
        <iframe style={{paddingTop:"40px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.989158142733!2d76.80836591518336!3d30.718705193359423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fecd91453ad7d%3A0x9bafd534b2247dd8!2sCH%20Devi%20Lal%20Centre%20of%20Learning!5e0!3m2!1sen!2sin!4v1653905491977!5m2!1sen!2sin" width="1100" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Row>
        <Row>
            <Col>
            <Form.Group className="mb-3">
                        <Form.Label className="formLabel" htmlFor="Firstname">Experience Name*</Form.Label>
                        <Form.Control className="field" type="text"  />
                    </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col>
            <Form.Group className="mb-3">
                        <Form.Label className="formLabel" htmlFor="Firstname">Venue Name*</Form.Label>
                        <Form.Control className="field" type="text"  />
                    </Form.Group>
            </Col>
        </Row>
        <Row>
        <Col>
             <Form.Group className="mb-3">
                        <Form.Label className="formLabel" htmlFor="Firstname">Category*</Form.Label>
                        <Form.Select className='field' aria-label="Default select example">
                            <option value="">-</option>
                            <option value="Exclusively on Kidzapp">Exclusively on Kidzapp</option>
                            <option value="Spring Fun">Spring Fun</option>
                            <option value="Afterschool Activities">Afterschool Activities</option>
                            <option value="Animal Fun">Animal Fun</option>
                            <option value="Art, Music &amp; Dance">Art, Music &amp; Dance</option>
                            <option value="Baby &amp; Toddler">Baby &amp; Toddler</option>
                            <option value="Birthdays">Birthdays</option>
                            <option value="Courses, Camps &amp; Workshops">Courses, Camps &amp; Workshops</option>
                            <option value="Eat Out">Eat Out</option>
                            <option value="Explore The City">Explore The City</option>
                            <option value="Fun &amp; Play">Fun &amp; Play</option>
                            <option value="Fun At Home">Fun At Home</option>
                            <option value="Markets &amp; Fairs">Markets &amp; Fairs</option>
                            <option value="Outdoor &amp; Nature">Outdoor &amp; Nature</option>
                            <option value="Schools &amp; Nurseries">Schools &amp; Nurseries</option>
                            <option value="Shows &amp; Cinema">Shows &amp; Cinema</option>
                            <option value="Sports &amp; Active">Sports &amp; Active</option>
                            <option value="Theme Parks">Theme Parks</option>
                            <option value="Water Fun">Water Fun</option>
                        </Form.Select>
             </Form.Group>
                </Col>
        </Row>
       
        <Row>
          
          <Col>
              <Form.Group className="mb-3">
                  <Form.Label className="formLabel" htmlFor="Firstname">SubCategory*</Form.Label>
                  <Form.Select className='field' aria-label="Default select example">
                  <option>-</option>
                  <option>Creative Arts</option>
                  <option>Dance</option>
                  <option>Gymnastics</option>
                  <option>Languages</option>
                  <option>Music</option>
                  <option>Performing Arts</option>
                  <option>Science &amp; Tech</option>
                  <option>Sports</option>    
                  </Form.Select>
              </Form.Group>
          </Col>
      </Row>
      <Row>
      <Col>
            <Form.Group className="mb-3" >
                <Form.Label className="formLabel1"  htmlFor="description">Description</Form.Label>
                <Form.Control  className="field" as="textarea"  style={{ height: '100px' }}/>
            </Form.Group> 
            </Col>
      </Row>
        </Form>
    </Container>

    <div className='form_Section'>
    <Container>
    <Row>
            <Col md={10}>
            <h4>Contact Information</h4>
            </Col>
        </Row>
        <Form className='getListContactForm'>
        <Row>
            <Col>
            <Form.Group className="mb-3">
                        <Form.Label className="formLabel" htmlFor="Designation">Designation*</Form.Label>
                        <Form.Control className="field" type="text"  />
                    </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col>
            <Form.Group className="mb-3">
                        <Form.Label className="formLabel" htmlFor="name">Name*</Form.Label>
                        <Form.Control className="field" type="text"  />
                    </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col>
            <Form.Group className="mb-3">
                        <Form.Label className="formLabel" htmlFor="Email">Email*</Form.Label>
                        <Form.Control className="field" type="text"  />
                    </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col>
            <Form.Group className="mb-3">
                        <Form.Label className="formLabel" htmlFor="Email">Phone Number</Form.Label>
                        <Form.Control className="field" type="text"  />
                    </Form.Group>
            </Col>
        </Row>
        <Row  className='recaptcha'>
            <Col>
            <Form.Group className="mb-3" >
    <Form.Check  type="checkbox" label="I'm not robot" />
  </Form.Group>
             </Col>
                <Col className="recaptcha_image">
                    <img className='recaptcha_image' src="https://www.gstatic.com/recaptcha/api2/logo_48.png"/>
                </Col>
            </Row>

            <Row  className='getListedButton'>
            <Col md={12}>
            <Button style={{borderRadius:"19px",width:"300px"}} size="lg" variant="primary">Get Listed</Button>
            </Col>
            </Row>
        </Form>
    </Container>
</div>
</div>
  <Section2/>
      <Footer/>
    </div>
  )
}

export default GetListed

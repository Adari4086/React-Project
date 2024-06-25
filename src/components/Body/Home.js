import React from 'react'
import { CiSquareChevRight } from "react-icons/ci";
import './home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hold from '../Images/holding.jpg';
import { IoTimeOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

import Couch from '../Images/couch.webp';
import Blog1 from '../Images/blog1.jpg';
import Blog2 from '../Images/blog2.jpg';
import Blog3 from '../Images/blog3.jpg';
import { FaSquare } from "react-icons/fa";
import { PiNewspaperThin } from "react-icons/pi";
import { LiaCommentSolid } from "react-icons/lia";
import Res from '../Images/girlb.jpg';
import IntroVideo from '../Videos/BBvideo.mp4';
function Home() {
  return (
    <div className='Body'>
    <div className='heading1'>
    <div className='defend'>
    <h1><span style={{color:'#FF8B23'}}>DEFEND &</span><br></br>DOMINATE</h1><br></br>
    <h6>"They are at sea in the waters, guided by female lights. Deep had  <br></br>divided the waters. For it saw the firmament and the face of the whales."</h6>
    <button className='btn1'>LEARN MORE<CiSquareChevRight style={{width:'50px',height:'30px'}}/></button>
    </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div> 
    <Container>
      <Row>
      <Col sm={6} className='Holding'>
        <img src={Hold} style={{width:'400px',height:'300px',position:'relative',right:'20px'}} className='new' alt=''/></Col>
      <Col>
      <div className='col2'>
      <h5 style={{color:'#FF8B23'}}><i>About us</i></h5>
      <h2>Welcome<br></br> to Basketball School</h2>
      <br></br>
      
      <h6 style={{color:'grey'}}>A created won't created subdue a every green<br></br> his set which above firmament earth firmament.<br></br> Seed firmament  be likeness fruitful to called <br></br>waters. Given great said seasons his midst beast.</h6>
      <br></br>
      <h6 style={{color:'grey'}}>A created won't created subdue a every green<br></br> his set which above firmament earth firmament.<br></br> Seed firmament  be likeness fruitful to called <br></br>waters. Given great said seasons his midst beast.</h6>
      <br></br>
      <button className='btn2'>READ MORE</button>
      </div>
      </Col>
      </Row>
    </Container>
    </div>
    <br></br>
    <br></br>
    <Container>
    <div>
    <center>
    <h6 style={{color:'#FF8B23'}}>Upcoming Event</h6>
    <h1>Land Morning Blessed</h1>
    </center> 
    <br></br>
    <br></br>
    <Row>
    <Col sm={6} className='left'>
    <div class='border'>
    <div className='line'>
    <h5>20<br></br>july</h5>
    </div>
    <ol>
    <li><IoTimeOutline />2:30 AM-3:30 AM</li>
    <li><FaMapMarkerAlt />Target Center</li>
    </ol>
    <h6 style={{position:'relative',left:'20px',bottom:'50px'}}>Divided living they're Subdue<br></br> man also dont. Land morning blessed do that for the best</h6>
    <button className='btn3'>View Details</button>
    </div>
    </Col>
    <Col sm={6} className='Right'>
    <div class='border'>
    <div className='line'>
    <h5>20<br></br>july</h5>
    </div>
    <ol>
    <li><IoTimeOutline />2:30 AM-3:30 AM</li>
    <li><FaMapMarkerAlt />Target Center</li>
    </ol>
    <h6 style={{position:'relative',left:'20px',bottom:'50px'}}>Divided living they're Subdue<br></br> man also dont. Land morning blessed do that for the best</h6>
    <button className='btn3'>View Details</button>
    </div>
    </Col>
    </Row>
    </div>
    </Container>
    <br></br>
    <br></br>
    <div className='carouselB'>
    <center style={{position:'relative',top:'40px'}}>
    <h6><i style={{color:'#FF8B23'}}>free tutorial</i></h6>
    <h1 style={{color:'white'}}>Learn About Basketball</h1>
    </center>
    <Container>
    <div className='caro1'>
    <div className='video'>
        <video width="850" height="500" controls>
          <source src={IntroVideo} type="video/mp4" />
        </video>
      </div>
    
    </div>
    </Container>
    </div>
    <br></br>
    <br></br>
    <div className='program'>
    <Row>
    <Col sm={3}></Col>
    <Col sm={4}>
    <h6><i style={{color:'#FF8B23'}}>Recreational Program</i></h6>
    <h1>Deep which above behold an woter<br></br> set a herb dry days.</h1>
    <h6 color={{color:'grey'}}>A created won't created subdue a every green<br></br> his set which above firmament earth firmament. Seed firmament be likeness fruitful to called waters. Given great said seasons his midst beast.<br></br><br></br>
    A created won't created subdue a every green<br></br>his set which above firmament earth firmament.<br></br> Seed firmament be likeness fruitful to called waters.</h6><br></br>
    <button className='btn4'>Read More</button>
    </Col>
    <Col sm={5}>
    <img src={Couch} className='Couch'/>
    </Col>
    </Row>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div className='Blog'>
    <center>
    <h6><i style={{color:'#FF8B23'}}>From The Blog</i></h6>
 <h1><b>Latest News&Updates</b></h1>
    </center>
    <br></br>
    <br></br>
    <br></br>
    <Container>
    <Row>
    <Col sm={4}><img src={Blog1 } className='blog'/><br></br><br></br>
    <p><FaSquare style={{color:'orange',padding:'-1px', marginRight:'5px'}}/>15 jan,2005</p>
    <h3 style={{borderBottom:'1px solid grey'}}>BASKETBALL FOR COACHES</h3>
    <br></br>
    <div style={{display:'inline-flex'}}>
    <p style={{marginRight:'80px'}}>< PiNewspaperThin style={{marginRight:'10px'}}/>Sports news</p>
    <p><LiaCommentSolid style={{marginRight:'10px'}}/>3 Comments</p>
    </div>
    </Col>
   <Col sm={4}><img src={Blog2} className='blog'/><br></br><br></br>
   <p><FaSquare style={{color:'orange',padding:'-1px', marginRight:'5px'}}/>15 jan,2005</p>
    <h3 style={{borderBottom:'1px solid grey'}}>BASKETBALL FOR COACHES</h3>
    <br></br>
    <div style={{display:'inline-flex'}}>
    <p style={{marginRight:'80px'}}>< PiNewspaperThin style={{marginRight:'10px'}}/>Sports news</p>
    <p><LiaCommentSolid style={{marginRight:'10px'}}/>3 Comments</p>
    </div>
   </Col>
    <Col sm={4}><img src={Blog3} className='blog'/><br></br><br></br>
    <p><FaSquare style={{color:'orange',padding:'-1px', marginRight:'5px'}}/>15 jan,2005</p>
    <h3 style={{borderBottom:'1px solid grey'}}>BASKETBALL FOR COACHES</h3>
    <br></br>
    <div style={{display:'inline-flex'}}>
    <p style={{marginRight:'80px'}}>< PiNewspaperThin style={{marginRight:'10px'}}/>Sports news</p>
    <p><LiaCommentSolid style={{marginRight:'10px'}}/>3 Comments</p>
    </div>
    </Col>
    </Row>
    </Container>
    </div>
    <br></br>
    <div className='Last'>
    <Row>
    <Col sm={6} className='Register'>
    <Container>
    <h3>JOIN OUR TEAM</h3><br></br>
    <h1><b>JOIN OUR FAN CLUB <br></br>AND GET FREE TICKET</b></h1>
    <button className='btn6'>REGISTER</button>
    </Container>
    </Col>
    <Col sm={6} className='girl'>
    <img src={Res} className='girl1' alt=''/>
    </Col>
    </Row>
    </div>
   
    </div>
  )
}
export default Home
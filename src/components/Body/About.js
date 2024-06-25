import React from 'react'
import './about.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hold from '../Images/holding.jpg';
function Matches() {
  return (
    <div>
    <div className='us'>
    <div style={{marginLeft:'400px',position:'relative',top:'150px'}}>
    <h1>About Us</h1>
    <p>Home/About Us</p>
    </div>
    
    
    </div>
    <br></br>
    <br></br>
    <div> 
    <Container>
      <Row>
      <Col sm={6} className='Holding' ><img src={Hold} style={{width:'400px',height:'300px',position:'relative',right:'20px'}}/></Col>
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
    </div>
  )
}

export default Matches
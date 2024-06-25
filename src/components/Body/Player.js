import React from 'react'
import './player.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import p1  from '../Images/antony.jpg';
import p2  from '../Images/barner.jpg';
import p3  from '../Images/butler.jpg';
import p4  from '../Images/cousin.jpg';
import p5  from '../Images/derozan.jpg';
import p6  from '../Images/durant.jpg';
import p7  from '../Images/george.jpg';
import p8  from '../Images/green.jpg';
import p9  from '../Images/irving.jpg';
import p10  from '../Images/jordan.webp';
import p11  from '../Images/lawry.jpg';
import p12  from '../Images/thomson.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
function Players() {
  return (
    <div>
    <div className='player'>
  
    <h1>Players</h1>
    
    </div>
    <div className='player1'>
     <Container>
    <Row>
    <Col sm={3}><img src={p1} className='pla'/>
    
    <h3>Antony Davis</h3>
    <p>Center Forward</p>

    </Col>
    <Col sm={3}><img src={p2} className='pla'/>
    
    <h3>Kelly Barners</h3>
    <p>Small Forward</p>
    
    </Col>
    <Col sm={3}><img src={p3} className='pla'/>
    
    <h3>Jimmy Butler</h3>
    <p>Small Forward</p>
    
    </Col>
    <Col sm={3}><img src={p4} className='pla'/>
  
    <h3>Demarcu Cousins</h3>
    <p>Center</p>
    
    </Col>
    </Row>
    </Container>
    <br></br>
    <br></br>
    <Container>
    <Row>
    <Col  sm={3}><img src={p5} className='pla'/>
    
    <h3>Demarcus DeRozan</h3>
    <p>Shooting guard</p>
    
    </Col>
    <Col  sm={3}><img src={p6} className='pla'/>
    
    <h3>Kevin Durant</h3>
    <p>Power Forward</p>
    
    </Col>
    <Col  sm={3}><img src={p7} className='pla'/>
    
    <h3>Paul Antony</h3>
    <p>Small Forward</p>
    
    </Col>
    <Col  sm={3}><img src={p8} className='pla'/>
  
    <h3>Gerald Green</h3>
    <p>Shooting Forward</p>
    
    </Col>
    </Row>
    </Container>
    <br></br>
    <br></br>
    <Container>
    <Row>
    <Col  sm={3}><img src={p9} className='pla'/>
    
    <h3>Kyrie Irving</h3>
    <p>Point Guard</p>
    
    </Col>
    <Col  sm={3}><img src={p10} className='pla'/>
  
    <h3>Michael Jordar</h3>
    <p>Center Forward</p>
    
    </Col>
    <Col  sm={3}><img src={p11} className='pla'/>
    
    <h3>Kyle Lowry</h3>
    <p>Point Guard</p>
    
    </Col>
    <Col  sm={3}><img src={p12} className='pla'/>
    
    <h3>Alexander Thompson</h3>
    <p>Shooting guard</p>
  
    </Col>
    </Row>
    </Container>
    </div>
    </div>
  )
}

export default Players
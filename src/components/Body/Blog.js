import React from 'react'
import './blog.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Blog1 from '../Images/blog11.webp';
import Blog2 from '../Images/blog12.webp';
import Blog3 from '../Images/blog13.webp';
import { FaSquare } from "react-icons/fa";
import Bat from '../Images/bat.webp';
import Rope from '../Images/rope.webp';
import Wicket from '../Images/wicket.webp';
import Padd from '../Images/padd.webp'
function Blog() {
  return (
    <div>
    <div className='us'>
    <div style={{marginLeft:'400px',position:'relative',top:'150px'}}>
    <h1>Our Blog</h1>
    <p>Home/Blog</p>
    </div>
    </div>
    <br></br>
    <br></br>
    <div className='Blog'>
    <Container>
    <Row>
    <Col sm={8}>
    <img src={Blog1} width={750}/>
    <span className='span1'>
    <center>
    <h3>20</h3>
    <p>july</p>
    </center>
    </span>
    <img src={Blog2}  width={750}/>
    <span className='span1'>
    <center>
    <h3>20</h3>
    <p>july</p>
    </center>
    </span>
    <br></br><br></br>
    <img src={Blog3}  width={750}/>
    <span className='span1'>
    <center>
    <h3>20</h3>
    <p>july</p>
    </center>
    </span>
    </Col>
    <Col sm={4}>
    <h3>CATEGORIES</h3><br></br><br></br>
    <div className='pad'>
    <Row style={{position:'relative',right:'90px',marginTop:'10px'}}>
    <Col className='hover'>
    <ol>
    <li>News</li>
    <li>Hotrend</li>
    <li>Histories</li>
    <li>Videos</li>
    <li>Matches</li>
    </ol>
    </Col>
    <Col>
    <ol>
    <li>(55)</li>
    <li>(40)</li>
    <li>(18)</li>
    <li>(20)</li>
    <li>(06)</li>
    </ol>
    </Col>
    </Row>
    </div>
    <h3>FEATURE POSTS</h3>
    <div>
    <Row style={{borderBottom:'1px solid',marginBottom:'25px'}}>
    <Col sm={4}>
    <img src={Bat}/>
    </Col>
    <Col sm={8} style={{marginBottom:'25px'}}>
    <span style={{display:'flex'}}>
    <p className='trend'>TRENDING</p>
    <p><i>20 july 2024</i></p>
    </span >
    <h6>Report:NBK could use 2K crowd noise is empty arenas</h6>
    </Col>
    </Row>
    </div>
    <div>
    <Row style={{borderBottom:'1px solid',marginBottom:'25px'}}>
    <Col sm={4}>
    <img src={Rope}/>
    </Col>
    <Col sm={8} style={{marginBottom:'25px'}}>
    <span style={{display:'flex'}}>
    <p className='trend'>TRENDING</p>
    <p><i>20 july 2024</i></p>
    </span >
    <h6>Report:NBK could use 2K crowd noise is empty arenas</h6>
    </Col>
    </Row>
    </div>
    <div>
    <Row style={{borderBottom:'1px solid',marginBottom:'25px'}}>
    <Col sm={4}>
    <img src={Wicket}/>
    </Col>
    <Col sm={8} style={{marginBottom:'25px'}}>
    <span style={{display:'flex'}}>
    <p className='trend'>TRENDING</p>
    <p><i>20 july 2024</i></p>
    </span >
    <h6>Report:NBK could use 2K crowd noise is empty arenas</h6>
    </Col>
    </Row>
    </div>
    <div>
    <Row style={{borderBottom:'1px solid',marginBottom:'25px'}}>
    <Col sm={4}>
    <img src={Padd}/>
    </Col>
    <Col sm={8} style={{marginBottom:'25px'}}>
    <span style={{display:'flex'}}>
    <p className='trend'>TRENDING</p>
    <p><i>20 july 2024</i></p>
    </span >
    <h6>Report:NBK could use 2K crowd noise is empty arenas</h6>
    </Col>
    </Row>
    </div>
    </Col>
    </Row>
    </Container>
    </div>
    </div>
  )
}

export default Blog
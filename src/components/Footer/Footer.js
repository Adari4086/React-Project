import React from 'react'
import './footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
function Footer() {
  return (
    <div className='Body2'>
    <Row className='Footer'>
    <Col sm={2}>
    <ol>
    <li><h4>Top Products</h4></li>
    <li>Managed Websites</li>
    <li>Managed Reputation</li>
    <li>Power Tools</li>
    <li>Marketing Service</li>
    </ol>
    </Col>
    <Col>
    <ol>
    <li><h4>Quick Links</h4></li>
    <li>Jobs</li>
    <li>Brand Assets</li>
    <li>Investor Relations</li>
    <li>Terms Of Conditions</li>
    </ol>
    </Col>
    <Col>
    <ol>
    <li><h4>Features</h4></li>
    <li>Jobs</li>
    <li>Brand Assets</li>
    <li>Inventor Relations</li>
    <li>Terms of Conditions</li>
    </ol>
    </Col>
    <Col>
    <ol>
    <li><h4>Resources</h4></li>
    <li>Guides</li>
    <li>Research</li>
    <li>Expects</li>
    <li>Agencies</li>
    </ol>
    </Col>
    <Col sm={4}>
    <ol>
    <li><h4>Newletter</h4></li>
    <li>You can trust us. we only send promo offers,</li>
    <li><input type='text' style={{padding:'10px 10px',marginTop:'15px',border:'none',marginBottom:'12px'}}/><button style={{position:'relative',right:'50px',padding:'5px 10px',backgroundColor:'#FF8B23',border:'none'}}>SUBSCRIBE</button></li>
    </ol>
    </Col>
    </Row>
    <div ClassName='copy' style={{display:'inline-flex'}}>
    <p style={{color:'white',marginLeft:'30px'}}>Copyright ©2024 All rights reserved | This template is made with  by AA</p>
    <span style={{position:'relative',left:'450px'}}><FaFacebookF style={{margin:'5px',color:'white'}}/><FaTwitter style={{margin:'5px',color:'white'}}/><FaInstagram style={{margin:'5px',color:'white'}}/><FaYoutube style={{margin:'5px',color:'white'}}/><FaSkype style={{margin:'5px',color:'white'}}/></span>
    </div>
    </div>
  )
}
export default Footer
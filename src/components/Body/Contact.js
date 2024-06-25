import React from 'react'
import Con from '../Images/contact.jpg';
import './contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
function Contact() {
  return (
    <div style={{height:'400',width:'100%'}}>
    <img src={Con} style={{width:'100%'}}/>
    <div className='margin'>
    <Container>
    <Row>
    <Col className='col1'>
    <h3>Get in touch</h3>
    <h6>You can contact us at anytime</h6>
    <p><FaMapMarkerAlt color='red'/>1/123/XPK,Malaal street,USA</p>
    <p><FaPhone color='red'/>+123 654 789 456</p>
    <p><IoIosMail color='red'/>malaalsupport@gmail.com</p>
    </Col>
    <Col>
    <h3>Contact us</h3>
    <input type='text' placeholder='Email' className='input'/><br></br>
    <textarea rows='3' placeholder='message' className='input2'></textarea><br></br>
    <button className='btn7'>SEND</button>
    </Col>
    </Row>
    </Container>
    </div>
    </div>
  )
}

export default Contact
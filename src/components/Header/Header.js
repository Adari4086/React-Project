import React from 'react'
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Images/Logo.png';
import {Link} from 'react-router-dom';

function header() {
  return (
  <header>
     <Link to='' className='logo' >BasketBall.</Link>                                 
     <nav>
     <Link to='/React-Project' className='Link1'>Home</Link>
     <Link to='about' className='Link1'>About</Link>
     <Link to='player' className='Link1'>Players</Link>
     <Link to='blog' className='Link1'>Blog</Link>
     <Link to='contact' className='Link1'>Contact</Link>
     </nav>
     </header>
  )
}
export default header
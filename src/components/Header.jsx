import React from 'react'
import { Nav } from 'react-bootstrap';
import '../styles/Header.css'
import LoginButton from './LoginButton';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='header'> 
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Link className="nav-link" to="/"> Books </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to={"/google-books"}>Google Books</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/about-us">About Us</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to={"/contact-us"}>
            Contact Us
          </Link>
        </Nav.Item>
      </Nav>
      <LoginButton/>
    </div>
  );
}

export default Header
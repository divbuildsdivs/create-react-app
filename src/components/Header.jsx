import React from 'react'
import { Nav } from 'react-bootstrap';
import '../styles/Header.css'
import LoginButton from './LoginButton';

const Header = () => {
  return (
    <div className='header'> 
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <LoginButton/>
    </div>
  );
}

export default Header
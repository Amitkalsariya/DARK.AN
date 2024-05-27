import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div className='header'>
      <div className="container-fluid ">
      <div className="container pd">
        <Navbar expand="lg" className="" >
      <Container fluid>
        <Navbar.Brand href="#">DA<span>R</span>K</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 m-left"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
           
            <Nav.Link href="#">
         Tournanment
            </Nav.Link>
            <Nav.Link href="#">
         News
            </Nav.Link>
            <Nav.Link href="#">
         Contact
            </Nav.Link>

          </Nav>
        
            <Button variant="outline-success" className='m-left'>SIGN-IN</Button>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
      </div>
    </div>
  )
}

export default Header

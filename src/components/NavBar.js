import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  let navigate = useNavigate()
  return <>
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>navigate("/")}>Student & Teacher Management</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link onClick={()=>navigate("/add-user")}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate("/studentlist")}>Student List</Nav.Link>
            <Nav.Link onClick={()=>navigate("/teacherlist")}>Teacher List</Nav.Link>
            <Nav.Link onClick={()=>navigate("/mentorassign")}>Mentors Assign</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
 
  </>
  
}

export default NavBar
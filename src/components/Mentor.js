import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Mentor({teacher,setTeacher}) {
  console.log(teacher);
  return <>
  <div className='container'>
  <Card className="text-center">
      <Card.Header className='header'>{teacher[0].mentor}</Card.Header>
      <Card.Body>
        <Card.Text>Mobile No : {teacher[0].mobileno}</Card.Text>
        <Card.Text>Email : {teacher[0].mail} </Card.Text>
        <Card.Text>Expert : {teacher[0].expert} </Card.Text>
        <div>
        <Button variant="primary">Edit</Button>
        &nbsp;
        &nbsp;
        <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
      
    </Card>

    <Card className="text-center">
    <Card.Header className='header'>{teacher[1].mentor}</Card.Header>
      <Card.Body>
        <Card.Text>Mobile No : {teacher[1].mobileno}</Card.Text>
        <Card.Text>Email : {teacher[1].mail} </Card.Text>
        <Card.Text>Expert : {teacher[1].expert} </Card.Text>
        <div>
        <Button variant="primary">Edit</Button>
        &nbsp;
        &nbsp;
        <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
      
    </Card>

    <Card className="text-center">
    <Card.Header className='header'>{teacher[2].mentor}</Card.Header>
      <Card.Body>
        <Card.Text>Mobile No : {teacher[2].mobileno}</Card.Text>
        <Card.Text>Email : {teacher[2].mail} </Card.Text>
        <Card.Text>Expert : {teacher[2].expert} </Card.Text>
        <div>
        <Button variant="primary">Edit</Button>
        &nbsp;
        &nbsp;
        <Button variant="danger">Delete</Button>
        </div>
      </Card.Body>
      
    </Card>

  </div>
  </>
}

export default Mentor
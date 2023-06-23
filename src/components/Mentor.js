import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Mentor({teacher,setTeacher}) {
  console.log(teacher);
  return <>
  <div className='container'>
    {
      teacher.map((t,i)=>{
        return <Card className="text-center" key={i}>
          <Card.Header  className='header'>{t.mentor}</Card.Header>
          <Card.Body>
            <Card.Text>Mobile No : {t.mobileno}</Card.Text>
            <Card.Text>Email : {t.mail}</Card.Text>
            <Card.Text>Expert : {t.expert}</Card.Text>
            <Button variant="primary">Edit</Button>
             &nbsp;
             &nbsp;
            <Button variant="danger" onClick={()=>{
              let newArray = [...teacher]
              newArray.splice(i,1)
              setTeacher (newArray)
            }}>Delete</Button>
          </Card.Body>

        </Card>
      })
    }
  
  </div>
  </>
}

export default Mentor
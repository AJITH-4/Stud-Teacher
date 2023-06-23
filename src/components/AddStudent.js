import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,useParams } from 'react-router-dom';

function AddStudent({user,setUser}) {

    let navigate = useNavigate()
    let params =useParams()
    // console.log(params)

    let[name,setName] =useState("")
    let[email,setEmail] =useState("")
    let[mobileno,setMobileno] =useState("")
    let[batch,setBatch] =useState("")
    let[course,setCourse] =useState("")
    let[mentor,setMentor] =useState("")
    
    let handleSubmit=()=>{
        let newUser ={name,email,mobileno,batch,course,mentor}
        let newArray = [...user]
        if(params.id!==undefined){
            newArray.splice(params.id,1,newUser)
        }else{
            newArray.push(newUser)
        }
        setUser(newArray)
        navigate("/")
    }

    useEffect(()=>{
        if(params.id!==undefined){
            setName(user[params.id].name)
            setEmail(user[params.id].email)
            setMobileno(user[params.id].mobileno)
            setBatch(user[params.id].batch)
            setCourse(user[params.id].course)
            setMentor(user[params.id].mentor)
        }
    },[])
  return <>
  <div className='container-fluid'>
  <Form>
  <Form.Group className="mb-3" >
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile No</Form.Label>
        <Form.Control type="text" placeholder="Mobileno" value={mobileno} onChange={(e)=>setMobileno(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Course</Form.Label>
        <Form.Control type="course" placeholder="Course" value={course} onChange={(e)=>setCourse(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mentor</Form.Label>
        <Form.Control type="text" placeholder="Mentor" value={mentor} onChange={(e)=>setMentor(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
  </div>
  </>
}

export default AddStudent
import React,{useState,useEffect,useContext} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Student({user,setUser}) {
    let navigate =useNavigate()

  return <>
  <div>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Mail</th>
          <th>Mobile No</th>
          <th>Batch</th>
          <th>Course</th>
          <th>Action</th> 
        </tr>
      </thead>
      <tbody>
       {
        user.map((e,i)=>{
          return<tr key={i}>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.mobileno}</td>
            <td>{e.batch}</td>
            <td>{e.course}</td>
            <td>
            <Button variant="primary" onClick={()=>navigate(`/edit-user/${i}`)}>Edit</Button>
            &nbsp;
            &nbsp;
            <Button variant="danger" onClick={()=>{
              let newArray = [...user]
              newArray.splice(i,1)
              setUser (newArray)
            }}>Delete</Button>
            </td>
          </tr>
        })
       }
      </tbody>
    </Table>
  </div>
  </>
}

export default Student
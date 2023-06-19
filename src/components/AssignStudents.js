import React from 'react'
import Table from 'react-bootstrap/Table';

function AssignStudents({user,setUser}) {
  return <>
   <div className='assign'>
   <Table striped bordered hover>
      <thead>
        <tr>
          {/* <th>#</th> */}
          <th>Mentor</th>
          <th>Student Name</th>
          <th>Batch</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
     {
        user.map((assign,i)=>{
            return <tr key={i}>
            <td>{assign.mentor}</td>
            <td>{assign.name}</td>
            <td>{assign.batch}</td>
            <td>{assign.course}</td>
            </tr>
        })
     }
      </tbody>
    </Table>
   </div>
  </>
}

export default AssignStudents
import React from "react"
import NavBar from "./components/NavBar"
import AddUser from "./components/AddUser";
import Student from "./components/Student";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useState } from "react";
import Mentor from "./components/Mentor";
import AssignStudents from "./components/AssignStudents";
import AddStudent from "./components/AddStudent";


function App() {
  let [user,setUser]=useState([
    { name:"Anoop",
    email:"anoop12@gmail.com",
    mobileno:9876543210,
    mentor:"Nagaraj",
    batch:"B42",
   course:"Full Stack Developer"
 },
 { name:"Ajith",
    email:"ajith12@gmail.com",
    mobileno:7896543210,
    mentor:"Nagaraj",
    batch:"B43",
   course:"Full Stack Developer"
 },
 { name:"Naveen",
    email:"naveen34@gmail.com",
    mobileno:8976443210,
    mentor:"SaiMohan",
    batch:"B42",
   course:"Devops"
 },
 { name:"Rajesh",
    email:"rajesh!23@gmail.com",
    mobileno:9448443210,
    mentor:"SaiMohan",
    batch:"B42",
    course:"Devops"
 },
 { name:"Gokul",
    email:"gokul322@gmail.com",
    mobileno:6386543210,
    mentor:"Sathish",
    batch:"B42",
   course:"Data Analyst"
 },
 {
   name:"Josh",
   email:"josh22@gmail.com",
   mobileno:8886553710,
   mentor:"Sathish",
   batch:"B42",
   course:"Data Analyst"
 }
  ]);
//   let [data,setData] = useState([
//    { name:"Anoop",
//    email:"anoop12@gmail.com",
//    mobileno:9876543210,
//    batch:"B42",
//    course:"Full Stack Developer"
// },
// { name:"Ajith",
//    email:"ajith12@gmail.com",
//    mobileno:7896543210,
//    batch:"B43",
//    course:"Full Stack Developer"
// },
// { name:"naveen",
//    email:"naveen34@gmail.com",
//    mobileno:8976443210,
//    batch:"B42",
//    course:"Devops"
// },
// {
//    name:"Rajesh",
//     email:"rajesh!23@gmail.com",
//     mobileno:9448443210,
//     batch:"B42",
//     course:"Devops"
// },
// { name:"gokul",
//    email:"gokul322@gmail.com",
//    mobileno:6386543210,
//    batch:"B42",
//    course:"Data Analyst"
// },
// { name:"Naveen",
//    email:"naveen22@gmail.com",
//    mobileno:8886553710,
//    batch:"B42",
//    course:"Data Analyst"
// }
//  ]);
 let [teacher,setTeacher]=useState([
   {
      mentor:"Nagaraj",
      mobileno:8746375890,
      mail:"nagaraj05@gmail.com",
      expert:'Full Stack Developer'

   },
   {
      mentor:"SaiMohan",
      mobileno:9745645890,
      mail:"sai45@gmail.com",
      expert:'Devops'

   },
   {
      mentor:"Sathish",
      mobileno:6346373490,
      mail:"sathish@gmail.com",
      expert:'Data Analyst'

   }
 ])
  return <>
  <BrowserRouter>
  <div><NavBar/></div>
  <div className="container-fluid">
  <Routes>
   <Route path="/" element={<AddUser user={user} setUser={setUser}/>}/>
   <Route path="/add-user" element={<AddStudent user={user} setUser={setUser}/>}/>
   <Route path="/edit-user/:id" element={<AddStudent user={user} setUser={setUser}/>}/>
   <Route path="/studentlist" element={<Student user={user} setUser={setUser}/>}/>
   <Route path="/teacherlist" element={<Mentor teacher={teacher} setTeacher={setTeacher}/>}/>
   <Route path="mentorassign" element={<AssignStudents user={user} setUser={setUser}/>}/>
  </Routes>
  </div>
  </BrowserRouter>
  
  </>
}

export default App;

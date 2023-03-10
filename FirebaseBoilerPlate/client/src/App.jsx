import { useState , useEffect } from 'react'
import axios from "axios"
import './App.css'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'


function App() {

  useEffect(()=>{
     axios.get("http://localhost:3000/task/getTask").then(res=>{console.log(res.data)})},[])
  
  // useState(()=>{
  //   axios.get("http://localhost:3000/task/").then(res=>res.data).then(res=>console.log(res.name))
  // },[])

  return (
      <Router>
      <Routes>
      <Route exact path ="/" element = {<Home/>}/>
      <Route path="login" element={<Login/>}/>
     
      </Routes>
      </Router>
  )
}

export default App

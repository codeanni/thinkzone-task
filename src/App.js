import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import ThankYou from './Components/ThankYou/ThankYou'
import axios from 'axios';
 
const App = () => {

  const getdata = async () =>{
    const response = await axios.get('https://thinkzone.in.net/erp/get_schools/monal.76839391622024@tz.in/admin')
    const data = await response.json();
    console.log(data);

  }
  getdata()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  )
}

export default App
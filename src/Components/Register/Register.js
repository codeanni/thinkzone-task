import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className='register-container'>
    <div className='register-card'>
    <div className="input-group">
          <label>Teacher Name</label>
          <input type="text" id="teacherName" placeholder="Enter Teacher Name" />
        </div>
        <div className="input-group">
          <label>Subject</label>
          <input type="text" id="subject" placeholder="Enter Subject" />
        </div>
        <div className="input-group">
          <label>Address</label>
          <input type="text" id="address" placeholder="Enter Address" />
        </div>
    <button className='sub-button'>Submit</button>
    </div>
</div>
  )
}

export default Register
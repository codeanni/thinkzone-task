import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login-container'>
        <div className='login-card'>
        <input type='text' placeholder='Enter User Id '/>
        <input type='password' placeholder='Enter Password'/>
        <button>Login</button>
        </div>
    </div>
  )
}

export default Login
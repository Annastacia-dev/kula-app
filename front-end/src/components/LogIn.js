import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.png';

const LogIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')  

    const handleEmailChange = (e) => {
        fetch ('http://localhost:9292/users', {
            method: 'GET'})
            .then(res => res.json())
            .then(data => {
                if (data.email === email) {
                    setEmail(e.target.value);
                }
            }
            )
    }

    const handlePasswordChange = (e) => {
        fetch ('http://localhost:9292/users', {
            method: 'GET'})
            .then(res => res.json())
            .then(data => {
                if (data.password_digest === password) {
                    setPassword(e.target.value);
                }
            }
            )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEmailChange()
        handlePasswordChange()
        console.log("Log in");
        window.location.href = '/restaurants';
    }

  return (
    <>
    <div className="signup">
        <div className='white-box'>
        <div className='content'>
        <img src={logo} alt="" style={{"width": "10%", "marginBottom":"-70px"}} />
            <h1> Welcome To Kula</h1>
            <form>
                <div className="info">
                         <input 
                          onChange={handleEmailChange}
                         type="text" name="email" 
                         placeholder='Email' />
                          <input 
                          onChange={handlePasswordChange}
                          type="password" 
                          name="password"
                          autoComplete='on'
                          placeholder='Password' />
                          
                </div>
                <div className='sign-up button'>
                    <button
                    onClick={handleSubmit}
                     >Log In</button>
                    <p>Don't have an account? 
                      <Link to="/signup"> Sign Up</Link>
                    </p>
                </div>
          </form>
        </div>
        </div>
  </div>
    </>
  )
}

export default LogIn
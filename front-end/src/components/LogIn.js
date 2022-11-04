import React, { useState} from 'react'
import { Link } from 'react-router-dom';

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    // Get email and password from the server, located at http://localhost:4000/users

    const handleSubmit = (e) => {
        e.preventDefault();
        window.history.href = '/home';

    }
                
  return (
    <>
    <div className="signup">
        <div className='white-box'>
        <div className='content'>
            <h1> Welcome To Kula</h1>
            <form>
                <div className="info">
                         <input 
                          onChange={e => setEmail(e.target.value)}
                         type="text" name="email" 
                         placeholder='Email' />
                         <p className='error'>Email was not found!</p>
                          <input 
                          onChange={e => setPassword(e.target.value)}
                          type="password" 
                          name="password"
                          autoComplete='on'
                          placeholder='Password' />
                          <p className='error'>Password is incorrect!</p>
                          
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
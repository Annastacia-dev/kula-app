import React,{ useState} from 'react'
import '../css/signup.css'
import { Link } from 'react-router-dom';
import logo from './logo.png'

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Post name, email, and password to the server, located at http://localhost:4000/users
  // Then clear the form

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password_digest: password
      })
    })
    .then(res => res.json())
      console.log("Sign");
      window.location.href = '/home';
  }

  return (
    <>
    <div className="signup">
    <div className="white-box">
        <div className='content'>
        <img src={logo} alt="" style={{"width": "10%", "marginBottom":"20px"}} />
            <h1> Welcome To Kula</h1>
            <form>
                <div className="info">
                         <input
                         onChange={e => setName(e.target.value)}
                          type="text" 
                          name="username" 
                          placeholder='Name' />
                          <p className='error'>Name cannot be empty!</p>
                         <input 
                          onChange={e => setEmail(e.target.value)}
                         type="text" name="email" 
                         placeholder='Email' />
                         <p className='error'>Email cannot be empty!</p>
                          <input 
                          onChange={e => setPassword(e.target.value)}
                          type="password" 
                          name="password"
                          autoComplete='on'
                          placeholder='Password' />
                          <p className='error'>Password must be more than 6 characters!</p>
                          
                </div>
                <div className='sign-up button'>
                    <button
                    onClick={handleSubmit}
                     >Sign Up</button>
                    <p>Already on Kula? 
                      <Link to="/login"> Log In</Link>
                    </p>
                </div>
                <div className="media-links">
                <p>By signing up you agree to Kula's <a href="terms">Term's of Service</a>
                <br /> and acknowledge Kula's <a href="privacypolicy">Privacy Policy</a> </p> 
                </div>
          </form>
        
        </div>
      </div>  
  </div>
    </>
  )
}

export default SignUp
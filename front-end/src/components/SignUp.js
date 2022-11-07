import React,{ useState } from 'react'
import '../css/signup.css'
import { Link } from 'react-router-dom';
import logo from './logo.png'


const SignUp = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([]);

  // Post name, email, and password to the server, located at http://localhost:4000/users
  // Then clear the form

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      fetch('http://localhost:9292/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name:name, email:email, password_digest:password })
      })
        .then(res => res.json())
        .then(data => {
          if (data.errors) {
            setErrors(data.errors);
          } else {
            setName('');
            setEmail('');
            setPassword('');
            setErrors([]);
            window.location.href = '/restaurants';
          }
        }
        )
    } else {
      setErrors(['! Please fill out all fields']);
    }
  }


  return (
    <>
    <div className="signup">
    <div className="white-box">
        <div className='content'>
        <img src={logo} alt="" style={{"width": "10%", "marginBottom": "-100px"}} />
            <h1> Welcome To Kula</h1>
            <form>
                <div className="info">
                         <input
                         onChange={e => setName(e.target.value)}
                          type="text" 
                          name="username" 
                          placeholder='Name' />
                         <input 
                          onChange={e => setEmail(e.target.value)}
                         type="text" name="email" 
                         placeholder='Email' />
                          <input 
                          onChange={e => setPassword(e.target.value)}
                          type="password" 
                          name="password"
                          autoComplete='on'
                          placeholder='Password' />
                          
                </div>
                <div className='errors'>
                            {errors.length > 0
                  ? errors.map((error, index) => (
                      <p key={index} style={{ color: "red" }}>
                        {error}
                      </p>
                    ))
                  : null}
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
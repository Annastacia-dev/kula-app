import React,{ useState, useEffect} from 'react'
import '../css/signup.css'
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    .then(res => res.json())
    setName('');
    setEmail('');
    setPassword('');
  }

  const handleNameChange = (e) => {
    // check if name length is greater than 0, if true set name to e.target.value else change error className to show error
    if (e.target.value.length > 0) {
      setName(e.target.value)
    } else {
      document.getElementByClass('error').className = 'error'
    }     
  }

  const handleEmailChange = (e) => {
    // check if email length is greater than 0, if true set email to e.target.value else change error className to show error
    if (e.target.value.length > 0) {
      setEmail(e.target.value)
    } else {
      document.getElementByClass('error').className = 'error'
    }
  }

  const handlePasswordChange = (e) => {
    // check if password length is greater than 0, if true set password to e.target.value else change error className to show error
    if (e.target.value.length > 0){
      setPassword(e.target.value)
    } else {
      document.getElementByClass('error').className = 'error'
    }
  }
  

  return (
    <>
    <div className="signup">
        <div className='content'>
            <h1> Welcome To Kula</h1>
            <form>
                <div className="info">
                         <input
                         onChange={handleNameChange}
                          type="text" 
                          name="username" 
                          placeholder='Name' />
                          <p className='error'>Name cannot be empty!</p>
                         <input 
                          onChange={handleEmailChange}
                         type="text" name="email" 
                         placeholder='Email' />
                         <p className='error'>Email cannot be empty!</p>
                          <input 
                          onChange={handlePasswordChange}
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
        
      <div className='images'>
         <div className='image'>
            <img src="https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
      </div>
  </div>
    </>
  )
}

export default SignUp
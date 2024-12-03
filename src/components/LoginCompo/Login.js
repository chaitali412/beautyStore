import './Login.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // import useNavigate

const Login =()=>{

  const [SuccessAlert, setSuccessAlert] = useState(false); 
  const [FailAlert, setFailAlert] = useState(false); 
  const [loginFormData, setFormData] = useState({
    username:'',
    password:''
  });

  const navigate = useNavigate(); // initialize navigate

  const handleChange = (e) => {
    setFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/login', loginFormData);
      console.log('User Logged In successfully:', response.data);

        // Show alert on successful login
        // alert("Login Successful!");
        setSuccessAlert(true);

        // Redirect to home page after 2 seconds
        setTimeout(() => {
          navigate('/home'); // redirect to home page
        }, 2000); // delay of 2 seconds

    } catch (error) {
      console.error('Error while Login:', error);
      // alert("Login failed. Please check your username and password.");
      FailAlert(true);
    }
  };

    return(
      <div>
         {SuccessAlert && (
          <div class="alert alert-success" role="alert">
          Login Successful!
          </div>
            )}
             {FailAlert && (
          <div class="alert alert-danger" role="alert">
          Login failed. Please check your username and password.
          </div>
             )}
    
        <div className='login-container'>
            <div className='card col-12 col-md-8 col-lg-3 col-mb-4'>
                <form onSubmit={handleLogin}>
            <img src="https://i.ibb.co/yVGxFPR/2.png" className='rounded-circle profImg mt-3'/>
                <h2 className='mt-2'>Sign In here</h2>
                <div className="mb-3 mt-5">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              name='username'
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name='password'
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
           <button type="submit" class="btn btn-primary">Login</button>
          </div>
          <div className="mb-2">
            Forget Password
          </div>
          <div className="mt-2 mb-3">
          <a>Sign Up</a></div>
                </form>
            </div>
          
            <h4></h4>
        </div>
                 
      </div>
    )
}

export default Login;
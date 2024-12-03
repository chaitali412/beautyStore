import './Sign.css';
import React, { useState } from 'react';
import axios from 'axios';

const Sign =()=>{

    const [formData, setFormData] = useState({
      username:'',
      password:'',
      name: '',
      age: '',
      location: '',
      description:''
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      console.log('User is registered successfully:', response.data);

      setFormData({
        username: '',
        password: '',
        name: '',
        age: '',
        location: '',
        description: ''
      });
    } catch (error) {
      console.error('Error while signing up:', error);
    }
  };

    return(
        <div className='sign-container'>
            <div className='card col-12 col-md-8 col-lg-3 col-mb-4'>
                <form onSubmit={handleSignup}>
            <img src="https://i.ibb.co/yVGxFPR/2.png" className='rounded-circle profImg mt-1'/>
                <h2 className='mt-2'>Sign Up here</h2>
                <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter Username"
              name='username'
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name='password'
              id="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              name='name'
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="age"
              name='age'
              placeholder="Enter Age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="location"
              name='location'
              placeholder="Enter Location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <textarea 
              type="text"
              className="form-control"
              id="about"
              name='description'
              placeholder="write about you"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
           <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
                </form>
            </div>
        </div>
    )
}

export default Sign;
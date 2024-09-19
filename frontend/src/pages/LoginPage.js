import React, { useState } from 'react'
import "./css/Login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
const LoginPage = () => {

  const {storeTokenLs} = useAuth();
  const [user,setUser] = useState({
    email:"",
    password:""
  })

  // show password 
  const [showPassword , setShowPassword] = useState(false);
  
  // navigate 
  const navigate = useNavigate();

  const handleShowpass = () =>{
    setShowPassword(!showPassword )
  }

  // onchange
  const handleOnChange = (e) =>{
    setUser((prev) =>({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  // submit form
   const hanldeSubmit = async (e) =>{
    e.preventDefault()

    try {
      await axios.post('http://localhost:2024/api/auth/login',user)
      .then(response =>{
        if (response.data.success === true) {

          storeTokenLs(response.data.token)
          navigate('/')
          console.log(response.data);
        
          
        }
      })
      .catch(err =>{
        alert("invalid credentials")
        console.log(err);
        
      })
    } catch (error) {
      alert("invalid login")
      console.log(error);
      
    }
    console.log(user);
    
  }
  return (
    <>
     <h3 className="text-center my-4">Login Page</h3>
    <div className="container">
    <div className="row border p-2 align-items-center justify-content-between">
      <div className="col col-lg-6 col-xl-6 ">
        <div className='col1_img'>
            <img
              src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-4652.jpg?ga=GA1.1.913813899.1683912346&semt=ais_hybrid"
              alt="img not found"
              
              />

        </div>
      </div>
      <div className="col col-lg-6 col-xl-6 ">
        <div className="register_form">
          <form onSubmit={hanldeSubmit}>
          
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email 
              </label>
              <input
                type="email"
                name='email'
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                onChange={handleOnChange}
                value={user.email}
              />
    
            </div>
          
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
              Password
              </label>
              <input
                type={`${showPassword? "text" :"password"}`}
                name='password'
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                onChange={handleOnChange}
                value={user.password}
                />
    
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
              <input
                  type="checkbox"
                  className="form-check-input mx-2"
                  checked={showPassword}
                  onChange={handleShowpass}
                />
      
                Show password
                </label>
              </div>

            <button type="submit" className="btn btn-primary login_btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
                </>
  )
}

export default LoginPage
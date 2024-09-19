import React, { useState } from "react";
import './css/Register.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
const RegisterPage = () => {

  const {storeTokenLs} = useAuth();
  const [user,setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })

  
  const navigate = useNavigate();
  
  const [showPassword , setShowPassword] = useState(false);
  
  const handleShowpass = () =>{
    setShowPassword(!showPassword )
  }


  const handleOnChange = (e) =>{
    // const {name,value} = e.target;

    setUser((prev) =>({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setUser({
      username:"",
      email:"",
      phone:"",
      password:""

    });
    try {
      await axios.post('http://localhost:2024/api/auth/register',user)
      .then(response =>{
        if (response.data.success===true) {
          navigate('/login');
          storeTokenLs(response.data.token)
          console.log(response);
          
        }
      })
      .catch(err =>{
        console.log(err);
        
      })
      console.log(user);
      
    } catch (error) {
      console.log(error);
      
    }

    
  }
  return (
    <>
          <h3 className="text-center my-4">Register Page</h3>
    <div className="container">
      <div className="row border p-2 align-items-center justify-content-between">
        <div className="col col-lg-6 col-xl-6 ">
          <div className="col1_img">
              <img
                src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-27096.jpg?size=626&ext=jpg&ga=GA1.1.913813899.1683912346&semt=ais_hybrid"
                alt="img not found"
               
              />

          </div>
        </div>
        <div className="col col-lg-6 col-xl-6 ">
          <div className="register_form">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  onChange={handleOnChange}
                  value={user.username}
                />
      
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email 
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  value={user.email}
                  onChange={handleOnChange}
                />
      
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  value={user.phone}
                  onChange={handleOnChange}
                />
      
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Password
                </label>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  name="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  value={user.password}
                  onChange={handleOnChange}
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

              <button type="submit" className="btn btn-primary register_btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RegisterPage;

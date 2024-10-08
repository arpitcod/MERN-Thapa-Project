import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  
    //navigate
    const navigate = useNavigate();

  // get token ..
  const {getToken,logoutUser} = useAuth();
  console.log(getToken);
  
  //logout 
  const handleLogout = () =>{
    logoutUser()
     navigate('/login')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            MERN PROJECT
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
              <NavLink className="nav-link" to="/service">
                Service
              </NavLink>

              {
                getToken ? (
                  <>
              <button className="btn btn-danger" onClick={handleLogout }>Logout</button>
                  </>
                ) : (

                  <>
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
                  
                  </>
                )
              }
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

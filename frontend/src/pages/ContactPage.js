import React, { useEffect, useState } from "react";
import "./css/Contact.css";
import { useAuth } from "../context/authContext";
import axios from "axios";
const ContactPage = () => {
  // get data form auth context 
  const {authData,getToken} = useAuth();

  const [user, setUser] = useState({
    username:"",
    email: "",
    message: "",
  });

  // const [contactForm ,setContactForm] = useState({
  //   username
  // })

  useEffect(() =>{
    if (authData) {
      
      setUser((prevData) =>({
        ...prevData,
        username:authData?.username || "" ,
        email:authData?.email || "",
        message:""
      }))
    }
  },[authData])

  const handleOnChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      await axios.post('http://localhost:2024/api/form/contact',user)
      .then(response =>{
        if (response.data.success === true) {
          console.log(response.data);
          
        }
      }).catch(err =>{
        console.log(err);
        
      })
    } catch (error) {
      console.log(error);
      
    }

    // only meesage fill remove and by default addded data because of auto fill
    setUser(prev =>({
      ...prev,
      message:""
    }))
   
  };
  // console.log("from contact" ,getToken);
  // console.log("from contact get data" ,authData);
  
  return (
    <>
  
      <div className="container">
        <div className="row border p-2 align-items-center justify-content-between">
          <div className="col col-lg-6 col-xl-6 ">
            <div className="col1_img">
              <img
                src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-3147.jpg?ga=GA1.1.913813899.1683912346&semt=ais_hybrid"
                alt="img not found"
              />
            </div>
          </div>
          <div className="col col-lg-6 col-xl-6 ">
            <div className="register_form">
              <form onSubmit={hanldeSubmit}>

                
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
                    value={user?.username}
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
                    onChange={handleOnChange}
                    value={user?.email}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Message
                  </label>
                  {/* <input
                  type="text"
                  name="message"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  onChange={handleOnChange}
                  value={user.message}
                /> */}
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    required
                    onChange={handleOnChange}
                    value={user?.message}
                    name="message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary contact_btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div classname>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17565.98662142089!2d68.96485763709742!3d22.24790125412441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39569c266399e37b%3A0xb5866e461a106e0a!2sDwarka%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1726141962240!5m2!1sen!2sin"
          width={"100%"}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default ContactPage;

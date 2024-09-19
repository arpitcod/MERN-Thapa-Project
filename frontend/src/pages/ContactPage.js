import React, { useState } from "react";
import "./css/Contact.css";
import { useAuth } from "../context/authContext";
const ContactPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    message: "",
  });

  const {authData} = useAuth();

  const handleOnChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <div className="container">
        <div className="row border p-2 align-items-center justify-content-between">
          <div className="col col-lg-6 col-xl-6 ">
            <div className="col1_img">
              <h1>{authData?.username} </h1>
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
                    value={user.email}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
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
                    value={user.message}
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

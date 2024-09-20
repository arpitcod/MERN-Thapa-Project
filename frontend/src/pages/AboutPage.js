import React from 'react'
import { useAuth } from '../context/authContext';

const AboutPage = () => {
  const {authData} = useAuth();

  return (
    <>
      <div className='container border' style={{minHeight:"100vh"}}>
        <h1 className='text-center'>Hii...{authData.username}</h1>
          <h3>About Us</h3>
          <p>Welcome to our platform! We are passionate about creating impactful digital experiences that connect people, solve problems, and make life easier. Our team specializes in building innovative solutions using modern technologies like the MERN stack, delivering seamless web and mobile applications tailored to our users’ needs.</p>
          <p>At the core of our work is a commitment to quality and customer satisfaction. We believe in simplicity, transparency, and collaboration, ensuring that every project we undertake aligns with our client’s goals and vision. Whether it's a personal project or a large-scale enterprise solution, we strive to deliver excellence through each line of code.</p>
          <p>Thank you for choosing us to be a part of your journey. Let's build something amazing together!</p>

      </div>
    </>
  )
}

export default AboutPage
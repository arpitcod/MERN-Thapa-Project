import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div className='d-flex flex-column  align-items-center'>

        <div className='error_img'>
            <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?ga=GA1.1.913813899.1683912346&semt=ais_hybrid" alt="not found" />
        </div>

        <div className='error_btn'>
            <button onClick={() => navigate('/') } className='btn btn-danger'>Go to home</button>
        </div>
    </div>
  )
}

export default ErrorPage
import React from 'react'
import errorImage from '../../Images/error-image-removebg-preview.png'
import './errorboundary.css'

const ErrorBoundary = () => {
  return (
            <img
              className="error-image"
            src ={errorImage} alt= "errorImg"
            ></img>
  )
}

export default ErrorBoundary
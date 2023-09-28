import React from 'react'
import errorImage from '../../Images/error-image-removebg-preview.png'
import './errorboundary.css'

const ErrorBoundary = () => {
  return (
    // <div className="error-card">
            <img
              className="error-image"
            //   style={{
            //     backgroundImage: errorImage,
            //     backgroundSize: "cover",
            //     alt:`error-image`
            //   }}
            src ={errorImage} alt= "errorImg"
            ></img>
        //   </div>
  )
}

export default ErrorBoundary
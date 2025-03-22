import React from 'react'
import '../styles/Card.css' 
import '../styles/Shimmer.css'

const ShimmerCard = () => {
  return (
    <div className='book-card' >
        <div className='shimmer book-image'></div>
        <div className="shimmer book-title"></div>
        <div className="shimmer book-author"></div>
        <div className="shimmer book-rating"></div>
        <div className="shimmer book-price"></div> 
    </div>
  )
}

export default ShimmerCard
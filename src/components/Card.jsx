import React from 'react'
import '../styles/Card.css' 
const Card = ({book}) => {
  const {title, author, rating, price, image, link} = book;
  return (
    <div className='book-card' >
        <img className='book-image' src={image} alt={`cover for ${title}`} />
        <h2 className='book-title'>{title}</h2>
        <p className='book-author'>{author.join(',')}</p>
        <p className='book-rating'>{rating}</p>
        <p className='book-price'>{`£${price}`}</p>
    </div>
  )
}

export default Card
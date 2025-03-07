import React from 'react'
import '../styles/Card.css' 
const Card = ({book}) => {
  const {title, author, rating, price, image, link} = book;
  return (
    <div className='book-card' >
        <img className='book-image' src={image} alt={`cover for ${title}`} />
        <h2>{title}</h2>
        <p>{author.join(',')}</p>
        <p>{rating}</p>
        <p>{`£${price}`}</p>
    </div>
  )
}

export default Card
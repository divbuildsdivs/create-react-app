import React from 'react'
import Card from './Card'
import '../styles/CardContainer.css'

const CardContainer = ({booksList}) => {
  return (
    <div className='card-container'>
        {
            booksList.map((book) => {
                return <Card key={book.objectID} book={book}/>
            })
        };
    </div>
  )
}

export default CardContainer
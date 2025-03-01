import React from 'react'
import Card from './Card'
import '../styles/CardContainer.css'
import data from './bookdata'
const CardContainer = () => {
    const booksList = data.results[0].hits;
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
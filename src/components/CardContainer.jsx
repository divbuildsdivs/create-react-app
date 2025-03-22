import React from 'react'
import Card from './Card'
import '../styles/CardContainer.css'
import ShimmerCard from './ShimmerCard'

const CardContainer = ({booksList}) => {
  if(booksList.length === 0){
    return (
      <div className='card-container'>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        <ShimmerCard/>
        </div>
    ) 
  }
  else {
    return (
      <div className='card-container'>
        {booksList.map((book) => {
                return <Card key={book.objectID} book={book}/>
              })}
        </div>
    )
  }
}

export default CardContainer
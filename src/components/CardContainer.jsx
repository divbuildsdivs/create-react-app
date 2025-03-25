import React from 'react'
import Card from './Card'
import '../styles/CardContainer.css'
import ShimmerCard from './ShimmerCard'

const CardContainer = ({booksList}) => {
  if(booksList.length === 0){
    return (
      <div className='card-container'>
        <ShimmerCard key={1}/>
        <ShimmerCard key={2}/>
        <ShimmerCard key={3}/>
        <ShimmerCard key={4}/>
        <ShimmerCard key={5}/>
        <ShimmerCard key={6}/>
        <ShimmerCard key={7}/>
        <ShimmerCard key={8}/>
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
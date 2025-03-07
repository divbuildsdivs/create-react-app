import React from 'react'
import CardContainer from './CardContainer';
import SearchComponent from './SearchComponent';
import bookdata from '../utilities/bookdata';
import { useState } from 'react';   

const BooksDashboard = () => {
const [booksList, setBooksList] = useState(bookdata.results[0].hits);
const updateBooksList = (newterm) => {
    const filteredBooks = bookdata.results[0].hits.filter((book) => {
        return book.title.toLowerCase().includes(newterm.toLowerCase());
    });
    setBooksList(filteredBooks);
}
  return (
    <div>
     <SearchComponent updateBooksList={updateBooksList}/>
     <CardContainer booksList={booksList}/>
    </div>
  )
}

export default BooksDashboard
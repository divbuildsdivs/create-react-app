import React from 'react'
import { useParams } from 'react-router';

const BookDetails = () => {
    const bookParams = useParams();
    const bookId = bookParams.bookId;
  return (
    <div>BookDetails of Book with Book ID {bookId} </div>
  )
}

export default BookDetails
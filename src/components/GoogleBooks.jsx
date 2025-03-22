import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";

const GoogleBooks = () => {
    const [books, setBooks] = useState([]);
    const booksAPI = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&maxResults=20&orderBy=relevance";
    useEffect(() => {
        fetch(booksAPI)
            .then((response) => response.json())
            .then((data) => setBooks(data.items));
    }, []);
    const bookdata = [];
    books.map((book) => {
        let bookObject = {
            id: book.id,
            title: book?.volumeInfo?.title || "",
            author: book.volumeInfo?.authors || [],
            rating: book.volumeInfo?.averageRating || 0,
            image: book.volumeInfo?.imageLinks?.thumbnail || "",
            price: book.saleInfo.listPrice.amount || 0,
        };
        if (bookObject) {
            bookdata.push(bookObject);
        }
    });
    return (
        <div>
            <h1>Google Books</h1>
            <CardContainer booksList={bookdata}/>
        </div>
         
    );
};

export default GoogleBooks;
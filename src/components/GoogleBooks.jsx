import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import SearchComponent from "./SearchComponent";

const GoogleBooks = () => {
    const [booksFromAPI, setBooksFromAPI] = useState([]);
    const [booksList, setBooksList] = useState([]);
    const booksAPI = "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&maxResults=20&orderBy=relevance";
    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const response = await fetch(booksAPI);
            if(!response.ok){
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            setBooksFromAPI(data.items.map((item) => ({
                    objectID: item.id,
                    title: item.volumeInfo?.title || "",
                    author: item.volumeInfo?.authors || [],
                    rating: item.volumeInfo?.averageRating || "",
                    image: item.volumeInfo?.imageLinks?.thumbnail || "",
                    price: item.saleInfo?.listPrice?.amount || 0,
                
            })));
          } catch (error) {
            console.error("Failed to fetch books:", error);
          }
        };
      
        fetchBooks();
      }, []);
    
    useEffect(()=>setBooksList(booksFromAPI), [booksFromAPI])
    const updateBooksList = (newterm) => {
        const filteredBooks = booksFromAPI.filter((book) => {
            return book.title.toLowerCase().includes(newterm.toLowerCase());
        });
        setBooksList(filteredBooks);
    }
    return (
        <div>
            <h1 className="title">Google Books</h1>
            <SearchComponent updateBooksList ={updateBooksList} />
            <CardContainer booksList={booksList}/>
        </div>
         
    );
};

export default GoogleBooks;
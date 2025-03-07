import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import '../styles/SearchComponent.css'
import { useState } from 'react';

const SearchComponent = ({updateBooksList}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        updateBooksList(searchTerm);
    }
    
    return (
        <div className='search-component-container'>
        <Form className='search-component-base' onSubmit={handleSearch}>
            <Row>
            <Col xs="auto">
                <Form.Control
                type="text"
                placeholder="Search for a book"
                className=" mr-sm-2 search-input"
                onChange={(e)=>setSearchTerm(e.target.value)}
                value={searchTerm}
                />
            </Col>
            <Col xs="auto">
                <Button type="button" className='search-button' onClick={handleSearch}>Search</Button>
            </Col>
            </Row>
        </Form>
        <br></br>
        <h2>  Search Term : {searchTerm}</h2>
    </div>
    )
}

export default SearchComponent
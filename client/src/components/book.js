import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Book() {
    const [book, setBook] = useState({})

    const param = useParams()
    
    useEffect(() => {
        const fetch = () => {
            axios.get(`http://localhost:3001/api/books/${param.id}`)
                .then(response => {
                    setBook(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        fetch()
    }, [param])

    return(
        <div>
            <h1>Title: {book.title}</h1>
            <h2>Author: {book.author}</h2>
            <h2>Summary: {book.summary}</h2>
            <h2>ISBN: {book.isbn}</h2>
            <h2>Genre: {book.genre}</h2>
        </div> 
    )
}

export default Book;
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Book() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetch = async () => {
            await axios.get('http://localhost:3001/api/books')
                .then((response) => {
                    setBooks(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        fetch()
    }, [])

    const Book = (props) => {
        return <li><Link to={`/api/books/${props.book.id}`}>{props.book.title}</Link></li>
    }

    const Books = () => {
        return books.map(book => {
            return <Book key={book} book={book} />
        })
    }

    return (
        <div>
            <h1>Book list</h1>
            <Books />
        </div>
    )
}

export default Book;
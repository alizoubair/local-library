import axios from 'axios'
import React, { useState } from 'react'

function Book() {
    const [state, setState] = useState({
        title: '',
        author: '',
        summary: '',
        isbn: '',
        genre: ''
    })

    const handleChange = (e) => {
        const value = e.target.value
        setState({
            ...state,
            [e.target.name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const book = {
            title: state.title,
            author: state.author,
            summary: state.summary,
            isbn: state.isbn,
            genre: state.genre
        }

        axios.post('http://localhost:3001/api/books', book)
            .then((reponse) => {
                console.log(reponse.data)
            })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input name='title' onChange={handleChange}/>
                </div>
                <div>
                    <label>Author</label>
                    <input name='author' onChange={handleChange}/>
                </div>
                <div>
                    <label>Summary</label>
                    <input name='summary' onChange={handleChange}/>
                </div>
                <div>
                    <label>ISBN</label>
                    <input name='isbn' onChange={handleChange}/>
                </div>
                <div>
                    <label>Genre</label>
                    <input name='genre' onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Book;
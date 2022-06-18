import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Authors() {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        const fetch = async () => {
            await axios.get('http://localhost:3001/api/authors')
                    .then(response => {
                        setAuthors(response.data)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
        }

        fetch()  
    }, [])

    const Author = (props) => {
        return <li><Link to={`/api/authors/${props.author.id}`}>{props.author.first_name}, {props.author.first_name}</Link></li>
    }

    const Authors = () => {
        console.log(authors)
        return authors.map(author => {
            return <Author key={author} author={author} />
        })
}

    return(
        <div>
            <h1>Authors</h1>
            <ul>
                <Authors />
            </ul>
        </div>
    )
}

export default Authors;
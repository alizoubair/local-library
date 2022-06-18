import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Author() {
    const [author, setAuthor] = useState({})
    const param = useParams()

    useEffect(() => {
        const fetch = () => {
            axios.get(`http://localhost:3001/api/authors/${param.id}`)
            .then(response => {
                setAuthor(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }

        fetch()
    }, [param])

    return(
        <h1>Author: {author.first_name}, {author.family_name}</h1>
    )
}

export default Author;
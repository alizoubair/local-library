import React, { useState } from 'react'
import axios from 'axios'

function Author() {
    const [state, setState] = useState({
        firstName: '',
        familyName: '',
        dateOfBirth: '',
        dateOfDeath: ''
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

        const author = {
            first_name: state.firstName,
            family_name: state.familyName,
            date_of_birth: state.dateOfBirth,
            date_of_death: state.dateOfDeath
        }

        axios.post('http://localhost:3001/api/authors', author)
            .then((response) => {
                console.log(response.data)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First name:</label>
                    <input name='firstName' onChange={handleChange}/>
                </div>
                <div>
                    <label>Family name:</label>
                    <input name='familyName' onChange={handleChange} />
                </div>
                <div>
                    <label>Date of birth:</label>
                    <input name='dateOfBirth' onChange={handleChange} />
                </div>
                <div>
                    <label>Date of death:</label>
                    <input name='dateOfDeath' onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Author;
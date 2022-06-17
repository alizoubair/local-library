/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';

function BookInstanceCreate() {
    const [imprint, setImprint] = useState('');

    const handleChange = (e) => {
        setImprint({ value: e.target.value }, () => {
            console.log(imprint);
        });
    }

    const handleSubmit = () => {
        const bookInstanceObject = {
            imprint: imprint
        };

        axios.post('http://localhost:3001/catalog/bookinstance/create', bookInstanceObject)
            .then((res) => {
                console.log(res.data);
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1>Create BookInstance</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Imprint:</label>
                    <input type="text" onChange={handleChange} />
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default BookInstanceCreate;
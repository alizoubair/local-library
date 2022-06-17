import React from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function BookInstance() {
	const params = useParams();

	const handleDelete = () => {
		axios.delete(`http://localhost:3001/catalog/bookinstance/${params.id}/delete`)
			.then(res => {
				console.log("BookInstance deleted!");
			})
			.catch(error => {
				console.log(error);
			})
	}

	return (
		<div>
			<h1>ID: {params.id}</h1>

			<div>
				<button onClick={handleDelete}>Delete</button>
				<button><Link to={`/catalog/bookinstance/${params.id}/update`}>Update</Link></button>
			</div>
			
		</div>
	)
}

export default BookInstance;
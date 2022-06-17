import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookInstanceUpdate() {
	const [imprint, setImprint] = useState('');
	const params = useParams();
	
	const handleChange = (e) => {
		setImprint({ imprint: e.target.value }, () => {
			console.log(imprint);
		})
	}

	const  handleUpdate = () => {
		const updatedBookInstance = {
			imprint: imprint
		}

		axios.put(`http://localhost:3001/catalog/bookinstance/${params.id}/update`, updatedBookInstance)
			.then(res => {
				console.log("BookInstance updated!");
			})
			.catch((error) => {
				console.log(error);
			})
	}
			
	return(
		<div>
			<form onSubmit={handleUpdate}>
				<div>
					<label>Imprint: </label>
					<input type="text" value={imprint} onChange={handleChange}/>
				</div>
				<button type='submit'>Submit changes</button>
			</form>
		</div>
	)
}

export default BookInstanceUpdate;
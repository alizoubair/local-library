import React ,{ Component } from 'react';
import axios from 'axios';

export default class BookInstances extends Component {
	constructor(props) {
		super(props)
		this.BookInstance = this.BookInstance.bind(this);
		this.BookInstances = this.BookInstances.bind(this);
		this.state = {
			bookInstances: []
		}
	}

	componentDidUpdate() {
		axios.get('http://localhost:3001/catalog/bookinstances')
			.then(res => {
				console.log(res.data);
				this.setState({ bookInstances: res.data })
			})
	}
	
	BookInstance(props) {
		return <li>{props.bookInstance}</li>
	}

	BookInstances() {
		const bookInstances = this.state.bookInstances;
		if (bookInstances) {
			return bookInstances.map(bookInstance => {
				return <this.BookInstance key={bookInstance.id} bookInstance={bookInstance} />
			})
		}
	}

	render() {
		return (
			<div>
				<h1>Book Instance List</h1>
				<ul><this.BookInstances /></ul>
			</div>
		)
	}
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

	componentDidMount() {
		axios.get('http://localhost:3001/catalog/bookinstances')
			.then(res => {
				this.setState({ bookInstances: res.data }, () => {
					console.log(this.state.bookInstances);
				});
			})
	}

	BookInstance(props) {
		return <li><Link to={`/catalog/bookinstance/${props.bookInstance}`}>{props.bookInstance}</Link></li>
	}

	BookInstances() {
		const bookInstances = this.state.bookInstances;
		if (bookInstances) {
			return bookInstances.map(bookInstance => {
				return <this.BookInstance key={bookInstance} bookInstance={bookInstance.id} />
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
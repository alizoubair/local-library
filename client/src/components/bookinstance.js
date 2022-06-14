import React, { Component } from 'react';
import axios from 'axios';

export default class BookInstance extends Component {
	constructor(props) {
		super(props)
		this.state = { 
			id: ''
		}
	}
	componentDidMount() {
		axios.get('http://localhost:3001/catalog/bookinstance/:id')
			.then(res => {
				this.setState({ id: res.data.id });
			})
			.catch(function (error) {
				console.log(error);
			})
	}
	render() {
		return (
			<h1>ID: {this.state.id}</h1>
		)
	}
}
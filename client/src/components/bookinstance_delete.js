import React, { Component } from 'react';
import axios from 'axios';

export default class BookInstanceDelete extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.delete(`http://localhost:3001/catalog/bookinstance/${this.state.id}/delete`)
			.then(res => {
				console.log("BookInstance deleted!");
			})
			.catch(error => {
				console.log(error);
			})
    }

    render() {
        return (
            console.log("Book instance deleted!")
        )
    }
}
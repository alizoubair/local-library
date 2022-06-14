import React ,{ Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class BookInstances extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bookInstances: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:3001/catalog/bookinstances')
			.then(res => {
				console.log(res.data);
				this.setState({ bookInstances: res.data });
			})
			.catch(function (error) {
				console.log(error);
			})
	};

	render() {
		const { bookInstances } = this.state.bookInstances;

		return (
			<div>
				<h1>Book Instance List</h1>
 				<ul> 
 					{ 
 						bookInstances.map(bookinstance => {
 							<li><Link>{bookinstance.id}</Link></li>
 						})
 					} 
 				 </ul>
			</div>
		)
	}
}
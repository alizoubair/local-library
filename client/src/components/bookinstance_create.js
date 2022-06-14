/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { Component } from 'react';

export default class BookInstanceCreate extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { imprint: '' }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const bookInstanceObject = {
      imprint: this.state.imprint
    };
    axios.post('http://localhost/3001/catalog/bookinstance/create', bookInstanceObject)
      .then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      })
    this.setState({ imprint: '' });
  }

  render() {
    return(
      <div>
        <h1>Create BookInstance</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
              <label>Enter imprint:</label>
              <input type="text" value={this.state.imprint} onChange={this.handleChange} />
          </div>
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}
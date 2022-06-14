import React, { Component } from 'react';
import axios from 'axios';

export default class bookInstance extends Component {
    constructor(props) {
        super(props)
        this.onChangeImprint = this.onChangeImprint.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            imprint: ''
        }
    }

    onChangeImprint(e) {
        this.setState({ imprint: e.target.value})
    }

    onSubmit(e) {
        e.preventDefeault()
        const bookInstanceObject = {
            imprint: this.state.imprint
        };
        axios.post('http://localhost:3001/catalog/bookinstance/create', bookInstanceObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            })
        this.setState({ imprint: '' })
    }

    render() {
        return(
            <div>
                <h1>Create BookInstance</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Enter imprint:</label>
                        <input type="text" value={this.state.imprint} onChange={this.onChangeImprint} />
                    </div>
                </form>
            </div>
        )
    }
}
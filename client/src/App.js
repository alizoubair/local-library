import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import BookInstance from './components/bookinstance';
import './App.css'
export default class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navBar">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bookinstance/create">Create book instance</Link></li>
              </ul>
            </nav>
          </div>
          <div className="container">
            <Routes>
              <Route path="/bookinstance/create" element={<BookInstance />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
  
}
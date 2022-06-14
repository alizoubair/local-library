import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BookInstance from './components/bookinstance';
import BookInstances from './components/bookinstances';
import './App.css';

export default class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navBar">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog/bookinstance/create">Create book instance</Link></li>
                <li><Link to="/catalog/bookinstances">All book-instances</Link></li>
              </ul>
            </nav>
          </div>
          <div className="container">
            <Routes>
              <Route path="/catalog/bookinstance/create" element={<BookInstance />} />
              <Route path="/catalog/bookinstances" element={<BookInstances />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
  
}
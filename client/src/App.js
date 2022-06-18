import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/home"
import BookInstanceCreate from './components/bookinstance_create'
import BookInstances from './components/bookinstances'
import BookInstance from './components/bookinstance'
import BookInstanceUpdate from './components/bookinstance_update'

import Authors from './components/authors'
import Author from './components/author'
import AuthorCreate from './components/author_create'

import Books from './components/books'
import Book from './components/book'
import BookCreate from './components/book_create'

import Navigation from './components/navigation';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog/bookinstance/create" element={<BookInstanceCreate />} />
                        <Route path="/catalog/bookinstances" element={<BookInstances />} />
                        <Route path='/catalog/bookinstance/:id' element={<BookInstance />} />
                        <Route path="/catalog/bookinstance/:id/update" element={<BookInstanceUpdate />} />
                        
                        <Route path='/api/authors' element={<Authors />}/>
                        <Route path='/api/authors/:id' element={<Author />}/>
                        <Route path='/api/authors' element={<AuthorCreate/>}/>

                        <Route path='/api/books' element={<Books />} />
                        <Route path='/api/books/:id' element={<Book />} />
                        <Route path='/api/books' element={<BookCreate />} />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }

}
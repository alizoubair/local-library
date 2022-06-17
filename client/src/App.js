import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import BookInstanceCreate from './components/bookinstance_create';
import BookInstances from './components/bookinstances';
import BookInstance from './components/bookinstance';
import BookInstanceUpdate from './components/bookinstance_update';
import Navigation from './components/navigation';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog/bookinstance/create" element={<BookInstanceCreate />} />
                    <Route path="/catalog/bookinstances" element={<BookInstances />} />
                    <Route path='/catalog/bookinstance/:id' element={<BookInstance />} />
                    <Route path="/catalog/bookinstance/:id/update" element={<BookInstanceUpdate />} />
                </Routes>
            </BrowserRouter>
        );
    }

}
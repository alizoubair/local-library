import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import BookInstance from './components/bookinstance';
import BookInstances from './components/bookinstances';
import BookInstanceDetails from './components/bookinstance_details';
import Navigation from './components/navigation'
import './App.css';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog/bookinstance/create" element={<BookInstance />} />
                    <Route path="/catalog/bookinstances" element={<BookInstances />} />
                    <Route path='/catalog/bookinstance/:id' element={<BookInstanceDetails />} />
                </Routes>
            </BrowserRouter>
        );
    }

}
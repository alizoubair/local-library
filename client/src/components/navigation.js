import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalog/bookinstances">All book instances</NavLink>
                        </li>
                        <li>
                            <NavLink to='/api/authors'>All Auhtors</NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalog/bookinstance/create">Create book instance</NavLink>
                        </li>
                        <li>
                            <NavLink to='/api/authors'>Create author</NavLink>
                        </li>
                        <li>
                            <NavLink to='/api/books'>Create Book</NavLink>
                        </li>
                        <li>
                            <NavLink to='/api/books'>All books</NavLink>
                        </li>
                    </ul>                    
                </nav>
            </div>
        )
    }
}
import React, { Component } from 'react';
import "./NavBar.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
                <ul>
                    <li>
                        {/*<a href="/products" activeClassName="active"/>*/}
                        <NavLink exact to="/products" activeClassName="active">Products</NavLink>
                    </li>            
                    <li>
                        <NavLink exact to="/products/new" activeClassName="active">Add Product</NavLink>
                    </li>
                </ul>
        );
    }
}

export default NavBar;
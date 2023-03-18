import React from "react";
import { NavLink } from 'react-router-dom';
import "../styles/layout/navbar.css"
import FavoritesDropwdown from "../components/FavoritesDropdown";

const NavBar = () => {

    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <FavoritesDropwdown />
            </li>
        </ul>
    )
}


export default NavBar;
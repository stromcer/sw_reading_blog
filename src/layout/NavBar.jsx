import React from "react";
import { NavLink } from 'react-router-dom';
import "../styles/layout/navbar.css"

const NavBar = () => {

    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/planetdetails">PlanetDetails</NavLink>
            </li>
        </ul>
    )
}


export default NavBar;
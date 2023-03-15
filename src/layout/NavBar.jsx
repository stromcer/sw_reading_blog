import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = ({children}) => {

    return (
    <>
        <ul>
            <li>
                <NavLink to="/">Hola</NavLink>
            </li>
            <li>
                <NavLink to="/planetdetails">Adios</NavLink>
            </li>
        </ul>
        {children}
    </>
    )
}


export default NavBar;
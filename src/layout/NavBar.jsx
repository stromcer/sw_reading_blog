import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "../styles/layout/navbar.css"
import FavoritesDropwdown from "../components/FavoritesDropdown";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';



const NavBar = () => {

    return (
        <Navbar bg="light" >
            <Container>
                <Navbar.Brand><Link to="/"> STAR WARS PHOTO PLACEHOLDER </Link></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="mx-5">
                        <NavLink to="/">Home</NavLink>  
                    </Navbar.Text>
                    <Navbar.Text>
                        <FavoritesDropwdown />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar;
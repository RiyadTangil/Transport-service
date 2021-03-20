
import React from 'react';
import "./Header.css"
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <Navbar className="container nav-bar" variant="dark">
           {
               props.children
           }
            <Nav className="ml-auto ">
              
            <Link className="px-4 text-muted" to="/home">Home</Link>
            <Link className="px-4 text-muted" to="/destination">Destination</Link>
            <Link className="px-4 text-muted" to="/blog">blog</Link>
            <Link className="px-4 text-muted" to="/contact">contact</Link>
            </Nav>
            <Button variant="outline-info">login</Button>
        </Navbar>
    );
};

export default Header;
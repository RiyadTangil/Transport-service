
import React from 'react';
import "./Header.css"
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <Navbar collapseOnSelect expand="lg" className="container nav-bar" variant="dark">
            <Navbar.Brand className=" text-muted" href="/home">Transport service</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto ">

                <Link className="px-4 text-muted" to="/home">Home</Link>
                <Link className="px-4 text-muted" to="/destionation">Destination</Link>
                <Link className="px-4 text-muted" to="#">blog</Link>
                <Link className="px-4 text-muted" to="#">contact</Link>
            </Nav>

            {
              props.children
          }
          
            </Navbar.Collapse>
        </Navbar >
    );
};

export default Header;
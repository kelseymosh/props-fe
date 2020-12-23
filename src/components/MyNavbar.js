import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import PropsLogo from '../images/PropsLogo.png'
import PropsLogo2 from '../images/PropsLogo2.png'

export default function MyNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav">
                <Navbar.Brand as={Link} to="/"><img src={PropsLogo2} alt="props-logo" className="props-logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/listplant">LIST PLANT</Nav.Link>
                        <Nav.Link as={Link} to="/plants">SEE PLANTS</Nav.Link>
                        <Nav.Link as={Link} to="/messages">MESSAGES</Nav.Link>
                        </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="profile">PROFILE</Nav.Link>
                            </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

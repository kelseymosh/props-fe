import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import PropsLogo from '../images/PropsLogo.png'

export default function MyNavbar({user}) {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav">
                <Navbar.Brand as={Link} to="/"><img src={PropsLogo} alt="props-logo" className="props-logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/listplant">list plant</Nav.Link>
                        <Nav.Link as={Link} to="/plants">see plants</Nav.Link>
                        <Nav.Link as={Link} to="/messages">messages</Nav.Link>
                        </Nav>
                            <Nav>
                                <Nav.Link as={Link} to="profile">
                                    {user.username
                                    ? <h3>Welcome {user.username}</h3>
                                    : <h3>login to start trading</h3>
                                    }               
                                </Nav.Link>
                            </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

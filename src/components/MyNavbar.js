import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import PropsLogo from '../images/PropsLogo.png'
import ProfileImage from '../images/ProfileImage.jpg'

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
                                    ? <div>
                                        <img
                                        className="user-avatar" 
                                        src={ProfileImage} 
                                        alt="user" />
                                    </div>
                                    : <img
                                        className="user-avatar" 
                                        src="https://icon-library.net/images/no-user-image-icon/no-user-image-icon-27.jpg" 
                                        alt="no user" />
                                    }               
                                </Nav.Link>
                            </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

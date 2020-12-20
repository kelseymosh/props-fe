import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import PropsLogo from "../images/PropsLogo.png"

export default function MyNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav">
                <Navbar.Brand href="#home"><img src={PropsLogo} alt="props-logo" className="props-logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#listplant">LIST PLANT</Nav.Link>
                        <Nav.Link href="#seeplants">SEE PLANTS</Nav.Link>
                        <Nav.Link href="#message">MESSAGES</Nav.Link>
                        </Nav>
                            <Nav>
                                <Nav.Link href="#profile">PROFILE</Nav.Link>
                            </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


export default function MyNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="color-nav">
                <Navbar.Brand href="#home">Props Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#listplant">List Plant</Nav.Link>
                        <Nav.Link href="#seeplants">See Plants</Nav.Link>
                        <Nav.Link href="#message">Messages</Nav.Link>
                        </Nav>
                            <Nav>
                                <Nav.Link href="#profile">Profile</Nav.Link>
                            </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

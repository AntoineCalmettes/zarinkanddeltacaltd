import React, { Component } from 'react'
import { Navbar ,Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png';

export default class Navigation extends Component {
    render() {
        return (
            <div>
            
                    <Navbar bg="dark" variant="dark" collapseOnSelect fixed="top" expand="sm" className="shadow-box z-depth-5">
                        <Container>
                            
                            <Navbar.Brand href="#home"><img className="logo" src={logo}/>Zarink and Deltaca Ltd</Navbar.Brand>
                            <Nav className="me-5">
                                <Nav.Link href="/">Accueil</Nav.Link>
                                <Nav.Link href="/QuiSommeNous">Qui somme-nous ?</Nav.Link>
                                <Nav.Link href="/">Forum</Nav.Link>
                                <Nav.Link href="/">Contact</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <br />
                
            </div>
        )
    }
}

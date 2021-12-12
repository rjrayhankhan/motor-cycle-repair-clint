import React from 'react';
import './Navigation.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.jpg'

const Navigation = () => {
    return (
        <>
            <Navbar className="Navigation" collapseOnSelect expand="lg" bg="black" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img style={{width: "70px"}} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <h1 style={{color: 'white'}}>Motor Cycle</h1>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/servesCenter">Serves Center</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/aboutUs">About Us</Nav.Link>
                            <Nav.Link href="/admin">Admin</Nav.Link>
                            <Button className="btn btn-primary mx-5 px-4">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
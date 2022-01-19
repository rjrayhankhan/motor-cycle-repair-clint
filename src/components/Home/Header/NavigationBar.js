import React, {useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.jpg';
import { UserContext } from '../../../App';


const NavigationBar = () => {
    const { value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2; 
    const [ admin, setAdmin ] = useState({});
    const token = sessionStorage.getItem("token");

    if(loggedInUser.email){
            const url = 'https://quiet-temple-98612.herokuapp.com/getAdmin';
            fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data.email))
    }

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
                            <Nav.Link href="/yourServes">YourServices</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            {
                                admin === loggedInUser.email ? <Nav.Link href="/admin">Admin</Nav.Link> : ''
                            }
                            {
                                loggedInUser.email || token
                                ? <div><img style={{width: '50px', height: '50px', borderRadius:'50%', marginLeft: '10px'}} src={loggedInUser.image} alt="" /></div>
                                : <Nav.Link href="/login" className="btn btn-primary mx-5 px-4 text-white">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
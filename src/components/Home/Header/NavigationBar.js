import React, {useContext} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.jpg';
import { UserContext } from '../../../App';


const NavigationBar = () => {
    const { value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2; 
    const token = sessionStorage.getItem("token");

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
                            <Nav.Link href="/admin">Admin</Nav.Link>
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
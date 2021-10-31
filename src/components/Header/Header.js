import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth'
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';


const Header = () => {
    const {user, logout} = useAuth();
    return (
        <Navbar expand="lg">
            <Container>
            <Navbar.Brand><Link to="/home">
                <img src={logo} alt="" className="d-inline-block align-top" />
                </Link>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                    <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                    {user.email && <Nav.Link><Link to="/my-bookings">My Bookings</Link></Nav.Link>}
                    {user.email && <Nav.Link><Link to="/manage-bookings">Manage All Bookings</Link></Nav.Link>}
                    {user.email && <Nav.Link><Link to="/addnewbooking">Add New Booking</Link></Nav.Link>}
                    <Nav.Link><Link to="/login">{!user.email ? 'Login' : <button className="btn btn-dark text-white" onClick={logout}>LogOut</button>}</Link></Nav.Link>
                    {user.email && <Navbar.Text className="text-white mx-4">
                        Signed in as: {user.displayName}
                    </Navbar.Text>}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
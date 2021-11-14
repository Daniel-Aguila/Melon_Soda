import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Header = () =>{
    const history = useNavigate();
    const logMeOut = () =>{
        history("/");
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    {/* ADD LOGO HERE <img src={logo} alt="logo" width="50px"/> */}
                    <Navbar.Brand href="/home">
                        {/* ADD LOGO HERE <img src={logo} alt="logo" width="50px"/> */}
                        Melon Soda
                    </Navbar.Brand>
                <Nav className="ml-auto">
                    <Link to="/dashboard">Dashboard</Link>

                    <Link to="/tickets">Tickets</Link>
                    
                    <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
                    
                </Nav>
                </Container>
          </Navbar>
        </div>
    )
};
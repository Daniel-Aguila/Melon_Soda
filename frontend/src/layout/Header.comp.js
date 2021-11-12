import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap';

export const Header = () =>{
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    {/* ADD LOGO HERE <img src={logo} alt="logo" width="50px"/> */}
                    <Navbar.Brand href="#home">
                        {/* ADD LOGO HERE <img src={logo} alt="logo" width="50px"/> */}
                        Melon Soda
                    </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#Dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="#Tickets">Tickets</Nav.Link>
                    <Nav.Link href="#Logout">Logout</Nav.Link>
                </Nav>
                </Container>
          </Navbar>
        </div>
    )
};
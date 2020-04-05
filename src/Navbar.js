import React, { Component } from "react";

import { Navbar } from "react-bootstrap";

class Nav extends Component {
   
    render() {
        return (
            <Navbar bg="secondary" variant="dark" style={{padding: "16px"}}>
                <Navbar.Brand href="#home">React challenges</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Work by: <a href="#home">Marcell</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>  
        );
    }
}

export default Nav;

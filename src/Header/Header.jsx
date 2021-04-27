import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import {IconButton,Badge} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './styles'
const NavBar = ({totalItems}) => {
    const classes = useStyles()
    return(
        <div className="App">
                <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
            <ReactBootStrap.Navbar.Brand href="/"> Ecommerce</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto"> 
                
                <ReactBootStrap.Nav.Link href="/Phones">Phones</ReactBootStrap.Nav.Link>
                
                
                <ReactBootStrap.Nav.Link href="#Pc">Pc</ReactBootStrap.Nav.Link>
                
                {/* <ReactBootStrap.NavDropdown title="YEET" id="collasible-nav-dropdown">
                    <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown> */}
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                <div className={classes.button}>
                        <IconButton aria-label="Show cart products" color='inherit'>    
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>

                        </IconButton>
                </div>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;
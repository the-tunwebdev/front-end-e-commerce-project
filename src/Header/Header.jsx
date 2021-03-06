import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    useHistory,
    Link
  } from "react-router-dom";
import {IconButton,Badge} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './styles'
const NavBar = ({totalItems}) => {
    let history =useHistory()
    const classes = useStyles()
    return(
        <div className="App">
                <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart products" color='inherit' onClick={()=>history.push('/cart')}>    
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>

                        </IconButton>
                </div>
                <Link to='/'>
                  <ReactBootStrap.Navbar.Brand > Home</ReactBootStrap.Navbar.Brand>
                </Link>  
                  
            
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto"> 
                <Link to="/phones">
                    <ReactBootStrap.Nav.Link href="/Phones">Phones</ReactBootStrap.Nav.Link>

                </Link>
                <Link to="/pc">
                    <ReactBootStrap.Nav.Link href="/pc">Pc</ReactBootStrap.Nav.Link>

                </Link>
                <Link to="/acess">
                    <ReactBootStrap.Nav.Link href="/acess">Accessories</ReactBootStrap.Nav.Link>

                </Link>
                
                
                
                
                {/* <ReactBootStrap.NavDropdown title="YEET" id="collasible-nav-dropdown">
                    <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown> */}
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;
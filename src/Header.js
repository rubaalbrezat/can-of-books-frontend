import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthButtons from './components/AuthButtons';
import './Footer.css';

class Header extends React.Component {
  render() {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand style={{color:'blue'}}> My Favorite Books </Navbar.Brand>
          <NavItem ><Link to="/" className="nav-link" style={{color:'blue'}} >Home &nbsp;</Link></NavItem>
          <NavItem ><Link to="/profile" className="nav-link"  style={{color:'blue'}} >Profile&nbsp;&nbsp;</Link></NavItem>
          <NavItem ><Link to="/about" className="nav-link" style={{color:'blue'}} >About&nbsp;&nbsp;</Link></NavItem>
          <NavItem ><br/> <AuthButtons /> </NavItem>
          {/* PLACEHOLDER: render a navigation link to the about page */}
        </Navbar>
        </div>


    )
  }
}

export default Header;
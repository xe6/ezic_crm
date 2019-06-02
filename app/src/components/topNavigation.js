import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";

import { ASSETS_PATH } from "../constants";

import { Link } from "react-router-dom";

class TopNavigation extends Component {
  state = {
    collapse: false
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <MDBNavbar className="flexible-navbar" dark expand="md" scrolling>
        <MDBNavbarBrand href="/">
          <strong>EZIC</strong> 
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#">Home</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <a
                className="nav-link navbar-link"
                rel="noopener noreferrer"
                target="_blank"
                href="https://pl-pl.facebook.com/mdbootstrap/"
              >
                <MDBIcon fab icon="facebook" />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                className="nav-link navbar-link"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/mdbootstrap"
              >
                <MDBIcon fab icon="twitter" />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <Link
                to="/profile"
                className="border border-light rounded mr-1 nav-link Ripple-parent"
              >
                <MDBIcon far icon="user-circle" className="mr-2" />
                Profile
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <a
                className="border border-light rounded mr-1 nav-link Ripple-parent"
                rel="noopener noreferrer"
                href="https://mdbootstrap.com/products/react-ui-kit/"
                target="_blank"
              >
                <MDBIcon icon="sign-out-alt" className="mr-2" />
                Logout
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default TopNavigation;

import React from 'react';
import logo from "../assets/logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/deals" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="briefcase" className="mr-3" style={{fontSize: "25px"}} />
                        Deals
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/clients" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="male" className="mr-3" style={{fontSize: "25px"}} />
                        Clients
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/teachers" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="graduation-cap" className="mr-3"/>
                        Teachers
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/courses" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chalkboard-teacher" className="mr-3"/>
                        Courses
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/charts" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-bar" className="mr-3" style={{fontSize: "18px"}}/>
                        Charts
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/tables" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Tables
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        404
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;
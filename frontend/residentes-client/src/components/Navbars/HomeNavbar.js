import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button, Row, Col } from "react-bootstrap";
import crslogo from "../../assets/img/crslogo_branco.png"


import routes from "../../routes/user_routes";

function HomeNavbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="logo-timo">
            <div className="">
              <a href="map">
                <img src={crslogo} alt="..."/>
              </a>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarText">
            <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
              <Nav.Link href="residents" className="nav-link">
                <li className="nav-item">
                  Residentes 
                </li>
              </Nav.Link>
              <Nav.Link href="companies" className="">
                <li className="nav-item">
                  Empresas
                </li>
              </Nav.Link>
              <Nav.Link href="report" className="nav-link">
                <li className="nav-item">
                  Relatos 
                </li>
              </Nav.Link>
              <Nav.Link href="https://www.unochapeco.edu.br/crs/info/apresentacao-21" target="_blank" className="nav-link">
                <div className="nav-item">
                  Sobre
                </div>
              </Nav.Link>
            </ul>
            <Nav.Link href="login" className="btn btn-sm btn-secondary nav-link ">
              Log in 
            </Nav.Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomeNavbar;
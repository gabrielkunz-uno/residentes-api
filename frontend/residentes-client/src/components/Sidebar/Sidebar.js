import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import crslogo from '../../assets/img/crslogo_branco.png'

import { Nav } from "react-bootstrap";


function Sidebar({ color, routes }) {
  const location = useLocation();
  return (
    <div className="sidebar bg-dark" data-color={color}>
      <div className="sidebar-wrapper">
        <div className="logo-tim">
            <div className="bd-placeholder-img card-img-left">
              <img
                src={crslogo} alt="..."/>
            </div>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (prop.props.name)
              return (
                <li
                  key={key}
                >
                  <NavLink
                    to={ prop.props.path}
                    className="nav-link"
                  >
                    <i className={prop.props.icon} />
                    <p>{prop.props.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;

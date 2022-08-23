import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar, Container, Button,} from "react-bootstrap";

import routes from "../../routes/admin_routes";

function Header() {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const navigate = useNavigate()


  const logout = (() => {
    localStorage.clear()
    navigate("/home/map")
  });

  return (
    <Navbar className="sticky-top" bg="dark" expand="lg">
      <Container fluid>
          <Button
            variant=""
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            onClick={(e) => e.preventDefault()}
          >
          </Navbar.Brand>
          <Button variant="info" className="btn_right btn-sm" onClick={logout}>
            <span>SAIR</span>
          </Button>
      </Container>
    </Navbar>
  );
}

export default Header;

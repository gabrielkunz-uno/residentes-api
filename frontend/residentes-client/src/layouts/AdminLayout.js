import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";

import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
// import Footer from "../components/Footer/Footer";

import routes from "../routes/admin_routes";
import "../assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";


function Admin() {
  const [color] = React.useState("black");
  const location = useLocation();
  const mainPanel = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar color={color} routes={routes}/>
          <div className="content">
            <Routes>{ routes }</Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default Admin;
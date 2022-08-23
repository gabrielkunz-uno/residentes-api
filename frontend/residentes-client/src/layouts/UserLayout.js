import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";

import HomeNavbar from "../components/Navbars/HomeNavbar";
import SidebarHome from "../components/Sidebar/SidebarHome";

import routes from "../routes/user_routes";

function Home() {
  const [color] = React.useState("black");

  return (
    <>
      <HomeNavbar />
      <div className="content">
        <Routes>{routes}</Routes>
      </div>
    </>
  );
}

export default Home;
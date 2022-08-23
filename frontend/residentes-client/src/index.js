import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/animate.min.css";
// // import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "./assets/css/demo.css";

import AdminLayout from "./layouts/AdminLayout";
import HomeLayout from "./layouts/UserLayout";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/home/*" element={<HomeLayout />} />
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="*" element={<Navigate replace to="/home/map" />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
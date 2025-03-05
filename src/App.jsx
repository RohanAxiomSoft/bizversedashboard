// import React, { useEffect } from 'react';
// import {
//   Routes,
//   Route,
//   useLocation
// } from 'react-router-dom';

// import './css/style.css';

// import './charts/ChartjsConfig';


// import Dashboard from './pages/Dashboard';

// function App() {

//   const location = useLocation();

//   useEffect(() => {
//     document.querySelector('html').style.scrollBehavior = 'auto'
//     window.scroll({ top: 0 })
//     document.querySelector('html').style.scrollBehavior = ''
//   }, [location.pathname]); 

//   return (
//     <>
//       <Routes>
//         <Route exact path="/" element={<Dashboard />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import "./css/style.css";
import "./charts/ChartjsConfig";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Settings from "./pages/Settings";

function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []); 

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scrollTo({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  const handleAuth = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem("isAuthenticated", status);
  };

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />} />

      <Route path="/login" element={<Login setAuth={handleAuth} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;

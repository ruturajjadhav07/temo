import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Elements/Nav";
import UserLogin from "./Components/User/UserLogin";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import UserDashboard from "./Components/User/UserDashboard"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/ulogin" element={<UserLogin />} />
        <Route path="/alogin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

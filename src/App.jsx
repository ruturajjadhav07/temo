import React from "react";
import { Routes, Route } from "react-router-dom";
import RoleSelection from "./components/RoleSelection";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import AddUserForm from "./components/AddUserForm";
import AddTankForm from "./components/AddTankForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelection />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/form" element={<AddUserForm />} />
      <Route path="/tank-form" element={<AddTankForm />} />
    </Routes>
  );
}

export default App;

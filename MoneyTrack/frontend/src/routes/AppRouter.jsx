import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Income from "../pages/Income/Income";
import Expenses from "../pages/Expenses/Expenses";
import Categories from "../pages/Categories/Categories";
import Goals from "../pages/Goals/Goals";
import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
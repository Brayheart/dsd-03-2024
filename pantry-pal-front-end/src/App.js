import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components
import Dashboard from "./Pages/Dashboard";
import Pantry from "./Pages/Pantry";
import Recipes from "./Pages/Recipies";
import Navbar from "./Pages/Components/Navbar";
import Sidebar from "./Pages/Components/Sidebar";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>

      {/* Route configuration */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route path="/recipes" element={<Recipes />} />

        {/* Redirect to dashboard as the default route */}
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

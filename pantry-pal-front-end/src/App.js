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
      <div className="flex">
        {/* Ensures Sidebar and main content are side by side */}
        <Sidebar />
        <div className="flex-1">
          {/* Takes up remaining space */}
          <Navbar />
          {/* Main content that changes with the route */}
          <div className="p-4">
            {/* Adds some padding around the routed content */}
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pantry" element={<Pantry />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/" element={<Dashboard />} /> {/* Home route */}
              <Route path="*" element={<Dashboard />} /> {/* Catch-all route */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

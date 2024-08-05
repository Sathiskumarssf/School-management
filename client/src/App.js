// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Navbar" element={<div>About Page</div>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;

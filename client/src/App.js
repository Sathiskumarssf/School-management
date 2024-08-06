// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        
        
        <Footer/>
         
        <Routes>
          <Route path="/Navbar" element={<div>About Page</div>} />
          
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;

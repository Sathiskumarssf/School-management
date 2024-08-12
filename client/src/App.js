import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
 

import SignUp from "./Pages/LoginSignUp/SignUp";
import AddDetails from "./Pages/addDetails/addDetails";
import Home from "./Pages/home/Home";
import Login from "./Pages/LoginSignUp/Login";
import AboutPage from "./Pages/AboutPage";
import Contectpage from "./Pages//ContactPage";
import Services from './Pages/ServicesPage';
 
 
 
 

const App = () => {
  return (
    <Router>
      
      <div>
         
        <Routes>
         
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contect" element={<Contectpage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/AddDetails" element={<AddDetails />} />
          <Route path="/services" element={<Services />} />
          
          
 
        </Routes>
    
      </div>

       
    </Router>
  );
};

export default App;

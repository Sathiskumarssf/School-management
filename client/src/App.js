
import AddDetails from './Pages/addDetails/addDetails';


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <Router>
      <div>
        <AddDetails/>
        <Navbar />
        <Footer/>
        
        <Routes>
          <Route path="/Navbar" element={<div>About Page</div>} />
          <Route path="/AddDetails" element={<div>AddDetails</div>} />
          
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;
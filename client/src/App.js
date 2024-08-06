import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import SignUp from './Pages/LoginSignUp/SignUp';
import Login from './Pages/LoginSignUp/Login';

const App = () => {
  return (
    <Router>
      <div>
         
        <Routes>
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
           
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

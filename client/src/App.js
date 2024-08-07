import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignUp from './Pages/LoginSignUp/SignUp';
import Login from './Pages/LoginSignUp/Login';
import AddDetails from "./Pages/addDetails/addDetails";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
           <Route path="/add-details" element={<AddDetails/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
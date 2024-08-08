import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home"
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
           <Route path="/home" element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
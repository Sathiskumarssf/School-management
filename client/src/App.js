import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import Home from './Pages/home/Home';
import AddDetails from './Pages/addDetails/addDetails';
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
          <Route path="/home" element={<Home />} />
          <Route path="/AddDetails" element={<AddDetails/>} />
          {/* <Route path="/addetails" element={<AddDetails />} /> */}
           
        </Routes>
    
      </div>

       
    </Router>
  );
};

export default App;

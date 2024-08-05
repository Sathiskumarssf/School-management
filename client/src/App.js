import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from './components/footer/Footer';
 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            
            <li>
              <Link to="/footer">Footer</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/footer" element={<Footer />} />
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;

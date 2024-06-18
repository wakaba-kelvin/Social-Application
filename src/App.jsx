import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Homepage/Home'; // Adjust the import path as necessary
import Signup from './Pages/Signup'; // Create this component for the sign-in/sign-up page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

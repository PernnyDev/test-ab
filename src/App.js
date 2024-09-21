import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginA from './components/LoginA';
import LoginB from './components/LoginB';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-a" element={<LoginA />} />
          <Route path="/login-b" element={<LoginB />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Teste A/B</h2>
      <nav className="d-flex justify-content-center">
        <ul className="list-unstyled">
          <li className="mb-3">
            <Link to="/login-a" className="btn btn-primary">Login A</Link>
          </li>
          <li>
            <Link to="/login-b" className="btn btn-success">Login B</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
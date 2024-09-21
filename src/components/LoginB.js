import React from 'react';
import { Link } from 'react-router-dom';
import './LoginB.css';

const LoginB = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5" style={{ height: '100vh' }}>
      <div className="w-50">
        <h2 className="text-center">Login B</h2>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-success w-100 mt-3">Entrar</button>
        </form>
        <Link to="/" className="btn btn-secondary mt-3 w-100">Voltar</Link>
      </div>
    </div>
  );
};

export default LoginB;
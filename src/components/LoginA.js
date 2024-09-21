import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginA.css';

const LoginA = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <div className="container mt-5">
      <h2>Login A</h2>
      {showAlert && (
        <div className="alert alert-danger" role="alert">
          Campos preenchidos incorretamente!
        </div>
      )}
      <form onSubmit={handleSubmit} className="form-login">
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control w-33" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control w-33" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Entrar</button>
      </form>
      <Link to="/" className="btn btn-secondary mt-3">Voltar</Link>
    </div>
  );
};

export default LoginA;
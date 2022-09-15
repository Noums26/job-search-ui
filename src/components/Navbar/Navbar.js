import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className='container'>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">E-Job</Link>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Acceuil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/offers">Offres</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-light text-dark" to="/login">Se Connecter</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

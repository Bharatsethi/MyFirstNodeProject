import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const HeaderComp = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Bharat Sethi First React App Project</Link>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nodeapi">Node API</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default HeaderComp;
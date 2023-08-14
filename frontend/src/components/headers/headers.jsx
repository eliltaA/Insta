// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
  const userIsLoggedIn = false; // Replace with actual state logic

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {!userIsLoggedIn ? (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </>
        ) : (
          <Link to="/dashboard">Dashboard</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;

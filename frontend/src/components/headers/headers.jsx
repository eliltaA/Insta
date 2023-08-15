// Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css'
import LogoutButton from '../session form/signOut';

function Header() {
  const currentUser = useSelector(state => state.session.user); 
  
  return (
    <header>
      <nav>
        {/* <Link to="/">Home</Link> */}
        {currentUser === null ? (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signin">Sign In</Link>
          </>
        ) : (
          <>
          <Link to="/dashboard">Dashboard</Link>
          <LogoutButton />
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

// Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch, faHome } from '@fortawesome/free-solid-svg-icons'
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
          <div className="header-left">
          {/* <Link to="/"> */}
            <img
              src="737566.png"
              alt="Instagram Logo"
              className="instagram-icon"
            />
          {/* </Link> */}
          <div className="search-bar">
          {/* <i className="fas fa-search search-icon"></i> */}
          <FontAwesomeIcon icon={faSearch} />
            {/* Add your search bar component here */}
          </div>
        </div>
          {/* <Link to="/dashboard">Dashboard</Link> */}
          <Link to="/">
          <FontAwesomeIcon icon={faHome} />
          {/* <img
              src="image_processing20210616-14620-1hsw5s4.png"
              alt="Home Logo"
              className="home-icon"
            /> */}
              </Link>
              <Link to="/add-post">
                <i className="fas fa-plus"></i>
                <FontAwesomeIcon icon={faPlus} />
              </Link>
              <Link to={`/profile/${currentUser.id}`}>
                
               
              </Link>
              <LogoutButton />
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

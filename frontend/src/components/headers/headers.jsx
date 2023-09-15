// Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch, faHome, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import LogoutButton from '../session form/signOut';
import Search from './search';
import AboutMe from '../AboutMe/AboutMe';
import DarkModeToggle from '../../darkMode';
// import CreatePost from '../posts/createPost';

function Header() {
  const currentUser = useSelector(state => state.session.user); 
  // console.log(currentUser.profilePicture)
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
          {/* <DarkModeToggle/> */}
          <div className="header-left">
            <img
              src={process.env.PUBLIC_URL + "/737566.png"}
              alt="Instagram Logo"
              className="instagram-icon"
            />
          <div className="search-bar">
          {/* <FontAwesomeIcon icon={faSearch} /> */}
          < Search/>
          </div>
        </div>
          {/* <Link to="/dashboard">Dashboard</Link> */}
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
              <Link to="/addPost">
                <FontAwesomeIcon icon={faPlus} />
              </Link>

              <Link to={`/profile/${currentUser.id}`}>
              <img
                src={currentUser.profilePicture || 'https://insta-hosting.s3.us-west-2.amazonaws.com/ProfilePicture.JPG'}
                alt={`${currentUser.username}'s Profile`}
                className="user-avatar"
              />
            </Link>
            <Link to="/aboutme" className="about-me-link">
              <FontAwesomeIcon icon={faCircleQuestion} />
              <span className="about">About Me</span>
            </Link>
              <LogoutButton />
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

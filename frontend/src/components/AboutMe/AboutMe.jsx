import React from 'react';
import './aboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function AboutMe() {
  return (
    <div className='me-container'>
    <div className="about-me-container">
      {/* <div className="post-header"> */}
        {/* <img
          className="user-avatar"
          src="https://insta-hosting.s3.us-west-2.amazonaws.com/AD5AE76E-CCFE-4A51-AAA4-D9804C672BFB.jpg"
          alt="Your Profile"
        /> */}
        {/* <span className="post-username">Elilta Abrham</span> */}
    {/* </div> */}

      <img
        className="about-me-image"
        src="https://insta-hosting.s3.us-west-2.amazonaws.com/AD5AE76E-CCFE-4A51-AAA4-D9804C672BFB.jpg"
        alt="Your Profile"
      />
    {/* <div className="like-button">
        <FontAwesomeIcon icon={faHeart} className="like-icon" />
      </div> */}

      <div className="about-me-text">
        <h2>About Me</h2>
        <p>
          Hi there! I'm Elilta Abrham, and I'm a dedicated software engineer with a passion for coding that goes back to my high school days. I've journeyed from a background in customer service to mastering languages like JavaScript and Ruby and creating Full-Stack Projects. I enjoy tackling challenges head-on and thrive in collaborative environments. Let's build something amazing together..
        </p>
        <h2>
          You can find me on:
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/elilta-abrham-87b79228b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/eliltaA/Insta.git" target="_blank" rel="noopener noreferrer">GitHub</a>
            </li>
            <li>
              <a href="https://your-portfolio-website.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </li>
          </ul>
        </h2>
      </div>
    </div>
    </div>
  );
}

export default AboutMe;

import React from 'react';
import './splashPage.css'
import Posts from '../posts/posts';

function SplashPage() {
  return (
    <div className="splash-container">
      {/* <h1>Welcome to InstaClone</h1>
      <p>Connect and share with friends!</p> */}
      <Posts/>
    </div>
  );
}

export default SplashPage;

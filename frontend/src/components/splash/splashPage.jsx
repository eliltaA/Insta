import React from 'react';
import './splashPage.css'
import Header from '../headers/headers';

function SplashPage() {
  return (
    <div className="splash-container">
       <Header />
      <h1>Welcome to InstaClone</h1>
      <p>Connect and share with friends!</p>
    </div>
  );
}

export default SplashPage;

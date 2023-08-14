import React, { useState } from 'react';
import './SignInForm.css'; 

function SignInForm() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement signin logic here
  };

  return (
    <div className="signin-form-container">
      <div className="signin-logo">
        <img src="737566.png" alt="Instagram Logo" />
      </div>
      <form className="signin-form" onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Username or Email"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <div className="signup-link">
        Don't have an account? <a href="/signup">Sign Up</a>
      </div>
      <div className="phone-image">
      {/* <img src={PhoneImage} alt="Phone" /> */}
        <p>Get the app.</p>
      <div className="app-store-icons">
        {/* <img src="png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo.png" alt="App Store" /> */}
        <img src="download-on-the-app-store-apple-logo.svg" alt="App Store" />
        <img src="play-store-logo-nisi-filters-australia-11.png" alt="Google Play" />
      </div>
      </div>
    </div>
  );
}

export default SignInForm;

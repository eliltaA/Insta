import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/usersReducer';
import './SignInForm.css'; 

function SignInForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    const credentials = {
      username,
      password
    };
    dispatch(loginUser(credentials));
    // Implement signin logic here
  };

  const handleDemoSignIn = (e) => {
    e.preventDefault();
    // Replace with your demo user credentials
    const demoUserCredentials = {
      username: 'demouser',
      password: 'demopassword'
    };

    dispatch(loginUser(demoUserCredentials));
  };

  return (
    <div className="signin-form-container">
      <div className="signin-logo">
        <img src="737566.png" alt="Instagram Logo" />
      </div>
      <form className="signin-form" onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        <button onClick={handleDemoSignIn}>Demo Login</button>
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

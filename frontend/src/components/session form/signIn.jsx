import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from '../../store/sessionReducer';
import './SignInForm.css'; 

function SignInForm() {
  const dispatch = useDispatch();
  const currentUser =  useSelector(state => state.session.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (currentUser !== null) return <Redirect to="/" />;

  const handleSignIn = (e) => {
    e.preventDefault();
    const credentials = {
      username,
      password
    };
    setErrors([]);
    return dispatch(login(credentials))
    .catch(async(res) => {
      let data;
      try{
        data = await res.json();
      }catch {
        data = await res.text();
      }
      if (data?.errors) setErrors(data.errors);
      else if (data) setErrors([data])
      else setErrors([res.statusText])
    })
  
  };

  const handleDemoSignIn = (e) => {
    e.preventDefault();
    const demoUserCredentials = {
      username: 'demouser',
      password: 'demopassword'
    };

    dispatch(login(demoUserCredentials));
  };

  return (
    <div className="signin-form-container">
      <div className="signin-logo">
        <img src={process.env.PUBLIC_URL + "/737566.png"} alt="Instagram Logo" />
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
        <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
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

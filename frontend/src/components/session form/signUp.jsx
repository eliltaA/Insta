import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './SignUpForm.css'; 
import { signup } from '../../store/sessionReducer';

function SignUpForm() {
  
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user )
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (currentUser !== null) return <Redirect to="/" />;

  const handleSignUp = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      name,
      email,
      password,
      confirmPassword
    };
    if (password === confirmPassword) {
    setErrors([]);
    return dispatch(signup(userData))
    .catch(async(res)=> {
      let data 
      try{
        data = await res.json()
      }catch{
        data = await res.text();
      }

      if (data?.errors) setErrors(data.errors)
      else if (data) setErrors([data])
      else setErrors([res.statusText]) 
    })
  }
    return setErrors(['Passwords do not match']);
  }

  return (
    <div className="signup-page">
      <div className="signup-content">
        <div className="signup-logo">
          <img src="737566.png" alt="Instagram Logo" />
        </div>
        <form className="signup-form" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <ul>
              {errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
          <button type="submit">Sign Up</button>
        </form>
        <div className="terms">
          By signing up, you agree to our <a href="#">Terms</a>,{' '}
          <a href="#">Data Policy</a> and <a href="#">Cookies Policy</a>.
        </div>
        <div className="signin-link">
          Have an account? <a href="/signin">Sign In</a>
        </div>
      </div>
      <div className="phone-image">
      {/* <img src={PhoneImage} alt="Phone" /> */}
        <p>Get the app.</p>
      <div className="app-store-icons">
        <img src="download-on-the-app-store-apple-logo.svg" alt="App Store" />
        <img src="play-store-logo-nisi-filters-australia-11.png" alt="Google Play" />
      </div>
      </div>
    </div>
  );
}

export default SignUpForm;

import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignUp from './components/session form/signUp';
import SignIn from './components/session form/signIn';
import SplashPage from './components/splash/splashPage';
import Header from './components/headers/headers';
import CreatePost from './components/posts/createPost';
import ProfilePage from './components/profilePage/profilePage';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  // const currentUser = sessionStorage.getItem("currentUser") 
  const currentUser = useSelector(state => state.session.user); // Get currentUser from Redux store
  return(
    <Router>
      <div>
      <Header />
        <Switch>
        
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/addPost" component={CreatePost}/>
          <Route path="/profile/:userId" component={ProfilePage} />
          <Route path="/aboutMe" component={AboutMe}/>
          <Route path="/">
          {currentUser !== null ? <SplashPage /> : <Redirect to="/signin" />}
        </Route>
        {/* <Redirect from="/" to="/feed" /> */}
        </Switch>
      </div>
    </Router>
  )
  // return (
  //   <h1>Hello world!</h1>
  // );
}

export default App;

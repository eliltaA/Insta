import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignUp from './components/session form/signUp';
import SignIn from './components/session form/signIn';
import SplashPage from './components/splash/splashPage';
import Header from './components/headers/headers';

function App() {
  const currentUser = useSelector(state => state.entities.session); // Get currentUser from Redux store
  return(
    <Router>
      <div>
      <Header />
        <Switch>
          {/* <Route path="/" exact component={SplashPage}/> */}
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/">
          {currentUser ? <SplashPage /> : <Redirect to="/signin" />}
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

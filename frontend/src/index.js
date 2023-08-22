import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store/store';
import * as session from './store/sessionReducer';
import { deleteFollowing, removeFollowing } from './store/followingReducer';

const store = configureStore()

function Root() {
  return (
    <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  )
}

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
          <Root />
      </React.StrictMode>
  );
}

if (sessionStorage.getItem("currentUser") === null || sessionStorage.getItem("X-CSRF-Token") === null) {
  // restoreSession().then(renderApp)
  store.dispatch(session.restoreSession()).then(renderApp);
} else {
  renderApp()
}

if (process.env.NODE_ENV !== "production") {
  window.store = store
  window.removeFollowing = removeFollowing
  window.deletFollowing = deleteFollowing
}

// const currentUser = sessionStorage.getItem('currentUser')
// const csrfToken = sessionStorage.getItem('csrfToken')
// let initialState = {}
// const currentUserData = currentUser ? JSON.parse(currentUser) : null;
// console.log(currentUserData)

// if (currentUserData) {
  //   initialState = {
    //     entities: {
      //       users: {
        //         [currentUserData.id]: currentUserData
        //       }
        //     },
        //     session: {
          //       currentUser: currentUserData.id
          //     }
          //   }
          // }
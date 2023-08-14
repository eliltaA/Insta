import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store/store';
import { restoreSession } from './utils/authUtil';
import { deleteSession, postSession, postUser } from './utils/sessionApiUtil';
import { createUser, loginUser, logoutUser } from './store/usersReducer';

// ReactDOM.createRoot(document.getElementById('root'))
// .render(
// <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'))
const currentUser = sessionStorage.getItem('currentUser')
const csrfToken = sessionStorage.getItem('csrfToken')

let initialState = {}
const currentUserData = currentUser ? JSON.parse(currentUser) : null;
console.log(currentUserData)

if (currentUserData) {
  initialState = {
    entities: {
      users: {
        [currentUserData.id]: currentUserData
      }
    },
    session: {
      currentUser: currentUserData.id
    }
  }
}

const store = configureStore(initialState)

const renderApp = () => {
  root.render(
    // <React.StrictMode>
      <Provider store={store}>
        <App prop1={'hello'} prop2={'world'} />
      </Provider>
    // </React.StrictMode>
  )
}

if (!currentUser || !csrfToken) {
  restoreSession().then(renderApp)
} else {
  renderApp()
}

window.store = store
window.postUser = postUser
window.postSession = postSession
window.deleteSession = deleteSession
window.loginUser = loginUser
window.logoutUser = logoutUser
window.createUser = createUser
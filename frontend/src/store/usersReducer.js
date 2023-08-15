// import { postUser, postSession, deleteSession } from "../utils/sessionApiUtil"

// // CONSTANTS
// export const RECEIVE_USER = 'RECEIVE_USER'
// export const REMOVE_USER = 'REMOVE_USER'
// // export const SET_VALIDATION_ERRORS = 'SET_VALIDATION_ERRORS'
// // export const SET_GENERIC_ERROR = 'SET_GENERIC_ERROR'
// export const RECEIVE_ERROR = 'RECEIVE_ERROR'


// // ACTION CREATORS
// export const receiveUser = user => {
//   debugger
//   return{
//   type: RECEIVE_USER,
//   payload: user
//   }
// }

// export const removeUser = (userId) => ({
//   type: REMOVE_USER,
//   payload: userId
// })

// export const receiveError = error => ({
//   type: RECEIVE_ERROR,
//   payload: error
// })

// // THUNK ACTION CREATORS
// export const createUser = userData => dispatch => (
//   postUser(userData)
//     .then(user => {
//       sessionStorage.setItem('currentUser', JSON.stringify(user.user))
//       dispatch(receiveUser(user))
//     })
// )

// export const loginUser = credentials =>async dispatch => {
//   const res = await postSession(credentials);
//   if(res.ok){
//     const data = await res.json();
//     sessionStorage.setItem('currentUser', JSON.stringify(data.user))
//     dispatch(receiveUser(data))
//   }else{
//     dispatch(receiveError(res))
//   }
// }

// export const logoutUser = userId => async dispatch => {
//   try {
//     const res = await deleteSession();
//     if (res.ok) {
//       sessionStorage.setItem('currentUser', null);
//       dispatch(removeUser(userId));
//     } else {
//       console.log('Logout failed');
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// };
// // export const logoutUser = userId => dispatch => (
// //   deleteSession()
// //     .then(() => {
// //       sessionStorage.setItem('currentUser', null)
// //       dispatch(removeUser)
// //     })
// // )
  
// // export const logoutUser = (userId) => async dispatch => {
// //   const res = await deleteSession();
// //     const data = await res.json();
// //     sessionStorage.setItem('currentUser', null)
// //       dispatch(removeUser(userId))
// // } 
//   // deleteSession()
//   //   .then(() => {
//   //     sessionStorage.setItem('currentUser', null)
//   //     dispatch(removeUser(userId))
//   //   })


// // SELECTORS

// // REDUCER
// const usersReducer = (state = {}, action) => {
//   const nextState = { ...state }
//   console.log(action)

//   switch(action.type) {
  
//     case RECEIVE_USER:
//       nextState[action.payload.user.id] = action.payload.user
//       return nextState
//     case REMOVE_USER:
//       delete nextState[action.payload]
//       return nextState
//       // return { ...state, user: null };
//     default:
//       return state
//   }
// }

// export default usersReducer
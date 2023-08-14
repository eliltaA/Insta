import { postUser, postSession, deleteSession } from "../utils/sessionApiUtil"

// CONSTANTS
export const RECEIVE_USER = 'RECEIVE_USER'
export const REMOVE_USER = 'REMOVE_USER'
// export const SET_VALIDATION_ERRORS = 'SET_VALIDATION_ERRORS'
// export const SET_GENERIC_ERROR = 'SET_GENERIC_ERROR'


// ACTION CREATORS
export const receiveUser = user => ({
  type: RECEIVE_USER,
  payload: user
})

export const removeUser = userId => ({
  type: REMOVE_USER,
  payload: userId
})

// export const setValidationErrors = error => ({
//   type: SET_VALIDATION_ERRORS,
//   payload: error
// })

// export const setGenericError  = error => ({
//   type: SET_GENERIC_ERROR,
//   payload: error
// })

// THUNK ACTION CREATORS
export const createUser = userData => dispatch => (
  postUser(userData)
    .then(user => {
      sessionStorage.setItem('currentUser', JSON.stringify(user.user))
      dispatch(receiveUser(user))
    })
)
// export const createUser = userData => async dispatch => {
//   try {
//     const user = await postUser(userData);
//     sessionStorage.setItem('currentUser', JSON.stringify(user.user));
//     dispatch(receiveUser(user));
//   } catch (error) {
//     if (error.response && error.response.data) {
//       // Handle validation errors
//       console.log('Validation errors:', error.response.data.errors);

//       // Dispatch an action to store the validation errors in Redux
//       dispatch(setValidationErrors(error.response.data.errors));
//     } else {
//       // Handle other types of errors (network errors, server errors, etc.)
//       console.error('An error occurred:', error);
//       // Display a generic error message to the user
//       dispatch(setGenericError('An error occurred. Please try again later.'));
//     }
//   }
// };

export const loginUser = credentials => dispatch => (
  postSession(credentials)
    .then(user => {
      console.log('User received:', user);
      sessionStorage.setItem('currentUser', JSON.stringify(user.user))
      dispatch(receiveUser(user))
    })
)

export const logoutUser = userId => dispatch => (
  deleteSession()
    .then(() => {
      sessionStorage.setItem('currentUser', null)
      dispatch(removeUser(userId))
    })
)

// SELECTORS

// REDUCER
const usersReducer = (state = {}, action) => {
  const nextState = { ...state }

  switch(action.type) {
    // case SET_VALIDATION_ERRORS:
    //   return {
    //     ...state,
    //     validationErrors: action.payload,
    //   };
    // case SET_GENERIC_ERROR:
    //   return {
    //     ...state,
    //     genericError: action.payload,
    //   };
    case RECEIVE_USER:
      nextState[action.payload.user.id] = action.payload.user
      return nextState
    case REMOVE_USER:
      delete nextState[action.payload]
      return nextState
    default:
      return state
  }
}

export default usersReducer
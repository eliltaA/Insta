import { RECEIVE_ERROR } from "./usersReducer"

const errorsReducer = (state = {}, action) => {
    const nextState = { ...state }
    console.log(action)
  
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
      case RECEIVE_ERROR:
       return action.payload
      default:
        return state
    }
  }
  
  export default errorsReducer
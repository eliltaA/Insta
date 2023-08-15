import { RECEIVE_ERROR } from "./sessionReducer"

export const getErrors = state => state.errors;

const errorsReducer = (state = {}, action) => {
    const nextState = { ...state }
    console.log(action)
  
    switch(action.type) {
      case RECEIVE_ERROR:
       return action.payload
      default:
        return state
    }
  }
  
  export default errorsReducer;
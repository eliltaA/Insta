import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import errorsReducer from "./errorsReducer";

const entitiesReducer = combineReducers({
  users: usersReducer
})

export default entitiesReducer
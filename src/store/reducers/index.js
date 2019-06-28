import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import errorLoginReducer from "./errorLoginReducer";
import authReducer from "./authReducer";

export default combineReducers({
  errors: errorReducer,
  errorsLogin: errorLoginReducer,
  auth: authReducer
});

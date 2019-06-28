import { combineReducers } from "redux";

import errorReducer from "./errorReducer";
import errorLoginReducer from "./errorLoginReducer";
import authReducer from "./authReducer";
import tabReducer from "./tabReducer";

export default combineReducers({
  errors: errorReducer,
  errorsLogin: errorLoginReducer,
  auth: authReducer,
  tab: tabReducer
});

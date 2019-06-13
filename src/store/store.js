import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { createStore } from "redux";

import loginReduxReducers from "../pages/LoginRedux/LoginReduxReducer";
import loginReduxFormReducers from "../pages/LoginReduxForm/reducers/index";

const store = createStore(combineReducers({
  loginReduxReducers,
  loginReduxFormReducers,
  form: formReducer
}));

export default store;

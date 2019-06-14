import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { createStore } from "redux";

import loginReduxReducers from "../pages/LoginRedux/store/LoginReduxReducer";
import loginReduxFormReducers from "../pages/LoginReduxForm/store/LoginReduxFormReducers";

const store = createStore(
  combineReducers({
    loginReduxReducers,
    loginReduxFormReducers,
    form: formReducer
  })
);

export default store;

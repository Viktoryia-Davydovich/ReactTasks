import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import { submitReduxForm } from "./LoginReduxFormActions";

const initialState = "";

const email = handleActions(
  {
    [submitReduxForm]: (state, action) => action.payload.email
  },
  initialState
);

const password = handleActions(
  {
    [submitReduxForm]: (state, action) => action.payload.password
  },
  initialState
);

const loginReduxFormReducers = combineReducers({
  email,
  password
});

export default loginReduxFormReducers;

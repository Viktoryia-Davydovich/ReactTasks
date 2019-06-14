import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

import { submitForm } from "./LoginReduxFormActions";

const initialState = "";

const email = handleActions(
  {
    [submitForm]: (state, action) => action.payload.email
  },
  initialState
);

const password = handleActions(
  {
    [submitForm]: (state, action) => action.payload.password
  },
  initialState
)

let loginReduxFormReducers = combineReducers({
  email,
  password
});

export default loginReduxFormReducers;

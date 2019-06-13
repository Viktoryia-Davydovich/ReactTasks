import { handleActions } from "redux-actions";
import { loginSuccess, emailError, passwordError } from "./LoginReduxActions";


const initialState = "";

const loginReduxReducers = handleActions(
  {
    [loginSuccess]: () => (initialState),
    [emailError]: (state, action) => (action.payload.errorEmail),
    [passwordError]: (state, action) => (action.payload.passwordEmail)
  },
  initialState
);

export default loginReduxReducers;
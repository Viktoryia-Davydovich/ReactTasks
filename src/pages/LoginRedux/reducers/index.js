import { combineReducers } from "redux";

import emailError from "./emailError";
import email from "./email";
import passwordError from "./passwordError";
import password from "./password";

let loginReduxReducers = combineReducers({
  emailError,
  email,
  passwordError,
  password
});

export default loginReduxReducers;

import { handleActions } from 'redux-actions';
import {loginSuccess, updatePassword, updateEmail, checkEmailError, checkPasswordError } from './LoginReduxActions';
import { combineReducers } from 'redux';

const initialState = "";

const email = handleActions({
  [updateEmail]: (state, action) => (action.payload.email)
}, initialState);

const password = handleActions({
  [updatePassword] : (state, action) => (action.payload.password)
}, initialState);


const emailError = handleActions({
  [loginSuccess]: () => (initialState),
  [checkEmailError]: (state, action) =>  (action.payload.emailError)
}, initialState);

const passwordError = handleActions({
  [loginSuccess]: () => (initialState),
  [checkPasswordError]: (state, action) =>  (action.payload.passwordError)
}, initialState);


const loginReduxReducers = combineReducers({
  email,
  password,
  emailError,
  passwordError
  }
)

export default loginReduxReducers;
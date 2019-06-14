import { handleActions } from 'redux-actions';
import { submitForm } from './LoginReduxActions';
import { combineReducers } from 'redux';

const initialState = '';

const email = handleActions({
  [submitForm]: (state, action) => (action.payload.email)
}, initialState);

const password = handleActions({
  [submitForm] : (state, action) => (action.payload.password)
}, initialState);


const emailError = handleActions({
  [submitForm]: (state, action) =>  (action.payload.emailError)
}, initialState);

const passwordError = handleActions({
  [submitForm]: (state, action) =>  (action.payload.passwordError)
}, initialState);


const loginReduxReducers = combineReducers({
  emailError,
  email,
  passwordError,
  password
  }
)

export default loginReduxReducers;
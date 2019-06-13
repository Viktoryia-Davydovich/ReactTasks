import { handleActions } from 'redux-actions';
import { updateEmail, updatePassword, loginSuccess, setEmailError, setPasswordError } from './LoginReduxActions';
import { combineReducers } from 'C:/Users/victo/AppData/Local/Microsoft/TypeScript/3.4.5/node_modules/redux';

const initialState = '';

const email = handleActions({
  [updateEmail]: (state, action) => (action.payload.email)
}, initialState);

const password = handleActions({
  [updatePassword] : (state, action) => (action.payload.password)
}, initialState);


const emailError = handleActions({
  [loginSuccess]: (state, action) => (initialState),
  [setEmailError]: (state, action) =>  (action.payload.emailError)
}, initialState);

const passwordError = handleActions({
  [loginSuccess]: (state, action) => (initialState),
  [setPasswordError]: (state, action) =>  (action.payload.passwordError)
}, initialState);


const loginReduxReducers = combineReducers({
  emailError,
  email,
  passwordError,
  password
  }
)

export default loginReduxReducers;
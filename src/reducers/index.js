import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from '../views/LoginRedux/reducers/combineReducers';

export default combineReducers({
  login,
  form: formReducer
});
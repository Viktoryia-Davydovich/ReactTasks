import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from '../pages/LoginRedux/reducers/index';
export default combineReducers({
  login,
});

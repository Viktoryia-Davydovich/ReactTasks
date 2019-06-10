import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import loginReduxReducers from '../pages/LoginRedux/reducers/index';
import loginReduxFormReducers from '../pages/LoginReduxForm/reducers/index';

let rootReducer = combineReducers({
  loginReduxReducers,
  loginReduxFormReducers,
  form: formReducer
});

export default rootReducer;
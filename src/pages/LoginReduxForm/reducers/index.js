import { combineReducers } from 'redux';

import email from './email';
import password from './password';

 let loginReduxFormReducers = combineReducers({
  email,
  password,
});

export default loginReduxFormReducers;

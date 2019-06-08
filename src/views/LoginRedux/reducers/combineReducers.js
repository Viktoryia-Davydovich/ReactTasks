import { combineReducers } from 'redux';

import errorEmail from './errorEmail';
import email from './email';
import errorPassword from './errorPassword';
import password from './password';

export default combineReducers({
    errorEmail,
    email,
    errorPassword,
    password,
});
import { createAction } from 'redux-actions';

export const updateEmail = createAction('UPDATE_EMAIL');
export const updatePassword = createAction('UPDATE_PASSWORD');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const checkEmailError = createAction('EMAIL_ERROR');
export const checkPasswordError = createAction('PASSWORD_ERROR');


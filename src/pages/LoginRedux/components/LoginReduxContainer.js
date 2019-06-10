import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginRedux from '../views/index';
import { validation, errorMessages } from '../../../views/Login/validation';
import { 
  updatePassword,
  updateEmail,
  loginSuccess,
  loginError
} from '../actions';
import {
  emailSelector,
  passwordSelector,
  emailErrorSelector,
  passwordErrorSelector,
} from '../selectors';

class LoginReduxContainer extends Component {

  validateField = (name, value) => {
    switch (name) {
      case 'email' : 
        return validation.email.test(value) ? '' : errorMessages.email;
      case 'password' : 
        return validation.password.test(value) ? '' : errorMessages.password;
      default:
        break;
    }

    return '';
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { loginSuccess, loginError, password, email, history } = this.props;

    const errorPassword = this.validateField('password', password);
    const errorEmail = this.validateField('email', email);
    
    if(!errorPassword && !errorEmail) {
      loginSuccess();
      history.push('/login-redux/success');
    } else {
      loginError({ 
        errorPassword,
        errorEmail,
      });
    }
  }

  onChangePassword = (event) => {
    this.props.updatePassword({ password: event.target.value });
  }

  onChangeEmail = (event) => {
    this.props.updateEmail({ email: event.target.value });
  }

  render () {
    const props = {
      email: this.props.email,
      password: this.props.password,
      errorEmail: this.props.errorEmail,
      errorPassword: this.props.errorPassword,
      onChangePassword: this.onChangePassword,
      onChangeEmail: this.onChangeEmail,
      onSubmit: this.handleSubmit,
    }

    return <LoginRedux {...props} />
  }
}

LoginReduxContainer.propTypes = {
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  errorPassword: PropTypes.string.isRequired,
  errorEmail: PropTypes.string.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  loginError: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  password: passwordSelector(state),
  email: emailSelector(state),
  errorPassword: passwordErrorSelector(state),
  errorEmail: emailErrorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  loginSuccess: data => dispatch(loginSuccess(data)),
  loginError: data => dispatch(loginError(data)),
  updatePassword: data => dispatch(updatePassword(data)),
  updateEmail: data => dispatch(updateEmail(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginReduxContainer);

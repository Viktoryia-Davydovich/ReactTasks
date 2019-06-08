import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Success from '../views/LoginReduxSuccess/index';
import { emailSelector, passwordSelector } from '../views/LoginRedux/selectors';

class SuccessContainer extends Component {
  render () {
    const props = {
      email: this.props.email,
      password: this.props.password,
    };

    return <Success {...props} />
  }
}

SuccessContainer.propTypes = {
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  password: passwordSelector(state),
  email: emailSelector(state),
})

export default connect(
  mapStateToProps
)(SuccessContainer);
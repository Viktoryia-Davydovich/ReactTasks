import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Success from '../views/index';
import { emailSelector, passwordSelector } from '../../selectors/index';

class SuccessFormContainer extends Component {
  render () {
    console.log('----SuccessContainer', this)
    const props = {
      email: this.props.email,
      password: this.props.password,
    };

    return <Success {...props} />
  }
}

SuccessFormContainer.propTypes = {
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  password: passwordSelector(state),
  email: emailSelector(state),
})

export default connect(
  mapStateToProps
)(SuccessFormContainer);

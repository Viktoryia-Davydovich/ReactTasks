import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loginUser } from "../../store/actions/authentication";
import LoginForm from "./LoginReduxFormView";
/*
class LoginReduxForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(user);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <LoginForm
          email={this.state.email}
          password={this.state.password}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          errors={errors}
        />
      </div>
    );
  }
}
*/

const LoginReduxForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: email,
      password: password
    };

    props.loginUser(user);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/");
    } else {
      setErrors({ errors });
    }
  }, [props.auth.isAuthenticated, props.history, errors]);

  return (
    <div>
      <LoginForm
        email={email}
        password={password}
        onSubmit={handleSubmit}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        errors={errors}
      />
    </div>
  );
};

LoginReduxForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginReduxForm);

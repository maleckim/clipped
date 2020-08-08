import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loginUserAction from './actions';

@connect(store => ({ response: store.login.response }))
export default class LoginPage extends Component {
  onHandleLogin = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const data = {
      email,
      password,
    };
    this.props.dispatch(loginUserAction(data));
  };

  render() {
    let isSuccess;

    if (this.props.response === 'woo') {
      isSuccess = true;
    }

    return (
      <div>
        <h3>Login Page</h3>
        {isSuccess ? <Redirect to="/" /> : null}
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  response: PropTypes.string,
  dispatch: PropTypes.func,
};

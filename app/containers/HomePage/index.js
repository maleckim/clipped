/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nav from '../../components/nav';
import Login from '../../components/login';
import NameHeader from '../../components/nameHeader';
import ClipMain from '../../components/Clips/clipMain';
import * as homeAction from './actions';

@connect(store => ({ status: store.home.status, user: store.home.user }))
export default class HomePage extends Component {
  logOutUser = () => {
    this.props.dispatch(homeAction.setOffline());
  };

  logIn = () => {
    this.props.dispatch(homeAction.setOnline());
  };

  render() {
    const dummy = ['hey', 'poop', 'die', 'eat'];
    if (this.props.status === 'Offline') {
      return (
        <>
          <Nav>
            <Login login={this.logIn} />
          </Nav>
          <ClipMain url={dummy} />
        </>
      );
    }
    return (
      <>
        <Nav>
          <NameHeader name={this.props.user} logout={this.logOutUser} />
        </Nav>
        <ClipMain url={dummy} />
      </>
    );
  }
}

HomePage.propTypes = {
  user: PropTypes.string,
  dispatch: PropTypes.func,
  status: PropTypes.string,
};

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
import ClipProvider from '../Clips/index';
import * as homeAction from './actions';
import ChartsTest from '../../components/RightDisplayTest/chartsTest';

@connect(store => ({ status: store.home.status, user: store.home.user }))
export default class HomePage extends Component {
  logOutUser = () => {
    this.props.dispatch(homeAction.setOffline());
  };

  logIn = () => this.props.history.push('/login');

  headerItem = () => {
    if (localStorage.getItem('user')) {
      return <NameHeader name={this.props.user} logout={this.logOutUser} />;
    }
    return <Login login={this.logIn} />;
  };

  render() {
    return (
      <>
        <Nav>{this.headerItem()}</Nav>
        <div className="container-fluid mt-5">
          <div className="row justify-content-around">
            <div className="col-1 left-form">
              <p>form posts here ??</p>
            </div>
            <div className="col-6 flex-grow-1 ">
              <ClipProvider />
            </div>
            <div className="justify-content-end">
              <div className="p-2">
                <ChartsTest />
              </div>
              <div className="p-2">
                <p>Other statistics ? Rankings ? Enjoyment ?</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

HomePage.propTypes = {
  user: PropTypes.string,
  dispatch: PropTypes.func,
  history: PropTypes.object,
};

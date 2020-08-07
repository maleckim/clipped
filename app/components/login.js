import React from 'react';
import PropTypes from 'prop-types';

export default function login(props) {
  return (
    <button type="button" className="btn navbtn" onClick={() => props.login()}>
      login
    </button>
  );
}

login.propTypes = {
  login: PropTypes.func,
};

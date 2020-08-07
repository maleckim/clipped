import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';

export default function nameHeader(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle className="navbtn px-4" id="dropdown-basic">
        {props.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => props.logout()}>Logout</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

nameHeader.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func,
};

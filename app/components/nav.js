import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function NavBar(props) {
  const [style, setStyle] = useState(false);
  return (
    <div className="container">
      <div className="d-flex flex-lg-col justify-content-around">
        <div className="p-2">
          <h1>Clipped+</h1>
        </div>
        <div className="p-2 w-50 align-self-center">
          <div className="input-group navsrch">
            <input
              type="text"
              placeholder="Search"
              className="form-control navsrch"
            />
            <div className="input-group-append">
              <button type="button" className="input-group-text navicn">
                <FontAwesomeIcon icon={faSearch} className="navicn" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-2 align-self-center">{props.children}</div>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  children: PropTypes.object,
};

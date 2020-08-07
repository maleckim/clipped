import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function NavBar(props) {
  const [style, setStyle] = useState(false);
  return (
    <div className="container">
      <div className="d-flex flex-lg-col justify-content-around">
        <div className="p-2">
          <h1>Clipped+</h1>
        </div>
        <div className="p-2 align-self-center">{props.children}</div>
      </div>
      <div className="row">
        <div className="col w-100">
          <div className={style ? 'search open w-100' : 'search'}>
            <input type="text" className="search-box" />
            <span
              role="button"
              tabIndex="0"
              onKeyPress={() => setStyle(!style)}
              className="search-button"
              onClick={() => setStyle(!style)}
            >
              <span className="search-icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  children: PropTypes.object,
};

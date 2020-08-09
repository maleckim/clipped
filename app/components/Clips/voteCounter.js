import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function VoteCounter(props) {
  return (
    <div className="align-self-center ml-n5">
      <div className="d-flex flex-column ml-n2">
        <div className="p-1">
          <button type="button" className="input-group-text navicn">
            <FontAwesomeIcon icon={faArrowUp} className="navicn" />
          </button>
        </div>
        <div className="p-1">{props.name || 0}</div>
        <div className="p-1">
          <button type="button" className="input-group-text navicn">
            <FontAwesomeIcon icon={faArrowDown} className="navicn" />
          </button>
        </div>
      </div>
    </div>
  );
}

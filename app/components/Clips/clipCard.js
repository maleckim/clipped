import React from 'react';
import PropTypes from 'prop-types';

export default function ClipCard(props) {
  return (
    <div className="p-2">
      <video width="320" height="240" controls>
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
}

// ClipCard.propTypes = {
//   url: PropTypes.string,
// };

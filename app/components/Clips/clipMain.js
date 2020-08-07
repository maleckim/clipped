import React from 'react';
import PropTypes from 'prop-types';
import ClipCard from './clipCard';

export default function ClipMain(props) {
  return (
    <div className="d-flex flex-column text-center clip-main">
      {props.url.map((url, index) => (
        <ClipCard key={url.id || index} url={url} />
      ))}
    </div>
  );
}

ClipMain.propTypes = {
  url: PropTypes.array,
};

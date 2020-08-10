import React from 'react';
import PropTypes from 'prop-types';
import ClipCard from './clipCard';

export default function ClipMain(props) {
  return (
    <div className="d-flex flex-column text-center clip-main">
      <ClipCard clips={props.clips} view={props.viewClip} />
    </div>
  );
}

ClipMain.defaultProps = {
  clips: [{}],
};

ClipMain.propTypes = {
  clips: PropTypes.array,
  viewClip: PropTypes.func,
};

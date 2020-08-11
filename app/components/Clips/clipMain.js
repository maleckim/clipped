import React from 'react';
import PropTypes from 'prop-types';
import ClipCard from './clipCard';

export default function ClipMain(props) {
  return (
    <div className="d-flex flex-column text-center clip-main">
      <h1>TOP CLIPS</h1>
      <ClipCard clips={props.clips} vote={props.upVote} />
    </div>
  );
}

ClipMain.defaultProps = {
  clips: [{}],
};

ClipMain.propTypes = {
  clips: PropTypes.array,
  upVote: PropTypes.func,
};

/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../videoPlayer';

export default function ClipCard(props) {
  return (
    <div className="p-2 my-3 clip-card">
      <h3>{props.title}</h3>
      {/* eslint-disable jsx-a11y/media-has-caption  */}
      <video track="noaudio" width="75%" height="100%" controls>
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
}

ClipCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

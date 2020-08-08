/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import clip from '../demoAssets/clippedex1.mp4';

export default function videoPlayer(props) {
  return (
    <div className="vid-container">
      <video track="noaudio" width="75%" height="100%" controls>
        <source src={clip} type="video/mp4" />
      </video>
    </div>
  );
}

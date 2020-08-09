/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VoteCounter from './voteCounter';

export default function ClipCard(props) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="row my-4">
      <div className="col clip-card mr-n4">
        <h3>{props.title}</h3>
        {/* eslint-disable jsx-a11y/media-has-caption  */}
        <video track="noaudio" width="80%" height="100%" controls>
          <source src={props.src} type="video/mp4" />
        </video>
        <a href="#">
          <p>comments</p>
        </a>
      </div>
      <VoteCounter />
    </div>
  );
}

ClipCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

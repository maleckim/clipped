/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VoteCounter from './voteCounter';

export default function ClipCard(props) {
  console.log(props);
  return props.clips.map((item, index) => (
    <div className="row my-4">
      <div className="col clip-card mr-n4">
        <h3>{item.name}</h3>
        {/* eslint-disable jsx-a11y/media-has-caption  */}
        <video track="noaudio" width="80%" height="100%" controls>
          <source src={item.clip} type="video/mp4" />
        </video>
        <a href={`/view/clip/${item.id}`}>
          <p>comments</p>
        </a>
      </div>
      <VoteCounter />
    </div>
  ));
}

ClipCard.defaultProps = {
  clips: [{}],
};

ClipCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';
import ClipCard from './clipCard';

export default function ClipMain(props) {
  console.log(props);
  return (
    <div className="d-flex flex-column text-center clip-main">
      {props.clips.map((clips, index) => (
        <ClipCard key={clips.id || index} src={clips.clip} />
      ))}
    </div>
  );
}

ClipMain.defaultProps = {
  clips: [{}],
};

ClipMain.propTypes = {
  clips: PropTypes.array,
};

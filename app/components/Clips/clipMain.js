import React from 'react';
import PropTypes from 'prop-types';
import ClipCard from './clipCard';

export default function ClipMain(props) {
  return (
    <div className="d-flex flex-column text-center clip-main">
      {props.clips.map((item, index) => (
        <ClipCard
          key={item.id || index}
          src={item.clip}
          title={item.name}
          description={item.description}
        />
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

import React from 'react';
import PropTypes from 'prop-types';

export default function ClipCard(props) {
  return <div className="p-2">{props.url}</div>;
}

ClipCard.propTypes = {
  url: PropTypes.string,
};

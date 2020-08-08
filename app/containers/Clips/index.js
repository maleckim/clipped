import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReduxThunk from 'redux-thunk';
import { connect, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import ClipMain from '../../components/Clips/clipMain';
import fetchClips from './actions';

export function ClipsProvider(props) {
  useEffect(() => {
    props.dispatch(fetchClips());
  }, []);

  const poop = useSelector(state => state.getIn(['clips', 'clipsFetched']));

  if (props.clipsFetched === true) {
    return <p>fetched!</p>;
  }
  return <p>waiting..</p>;
}

ClipsProvider.propTypes = {
  //   clipsFetched: PropTypes.bool,
  //   clipsArray: PropTypes.arrayOf({}),
  //   dispatch: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(ClipsProvider);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClipMain from '../../components/Clips/clipMain';
import fetchClips from './actions';

@connect(store => ({
  clipsFetched: store.clips.clipsFetched,
  clipsArray: store.clips.clipsArray,
}))
export default class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchClips());
  }

  render() {
    return <ClipMain clips={this.props.clipsArray} />;
  }
}

HomePage.propTypes = {
  clipsArray: PropTypes.array,
  dispatch: PropTypes.func,
};

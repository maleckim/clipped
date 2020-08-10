import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClipMain from '../../components/Clips/clipMain';
import fetchClips from './actions';
import clipsView from './actions';

@connect(store => ({
  clipsFetched: store.clips.clipsFetched,
  clipsArray: store.clips.clipsArray,
  clipsView: store.clips.clipsView,
}))
export default class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchClips());
  }

  viewClip = id => {
    this.props.dispatch(clipsView());
  };

  render() {
    return <ClipMain clips={this.props.clipsArray} viewClip={this.viewClip} />;
  }
}

HomePage.propTypes = {
  clipsArray: PropTypes.array,
  dispatch: PropTypes.func,
};

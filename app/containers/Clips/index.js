import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClipMain from '../../components/Clips/clipMain';
import * as clipActions from './actions';

@connect(store => ({
  clipsFetched: store.clips.clipsFetched,
  clipsArray: store.clips.clipsArray,
  clipsView: store.clips.clipsView,
}))
export default class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(clipActions.fetchClips());
  }

  upVote = id => {
    this.props.dispatch(clipActions.upvoteClip(id));
  };

  render() {
    return <ClipMain clips={this.props.clipsArray} upVote={this.upVote} />;
  }
}

HomePage.propTypes = {
  clipsArray: PropTypes.array,
  dispatch: PropTypes.func,
};

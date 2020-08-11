export const fetchClips = () => {
  return {
    type: 'FETCH',
  };
};

export function viewClip() {
  return {
    type: 'VIEW',
  };
}

export const upvoteClip = id => {
  return {
    type: 'UPVOTE_CLIP',
    id,
  };
};

export function downvoteClip(id) {
  return {
    type: 'DEC',
    id,
  };
}

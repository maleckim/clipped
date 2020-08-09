import Clip from '../../demoAssets/clippedex1.mp4';
import Clip2 from '../../demoAssets/clippedex2.mp4';
import Clip3 from '../../demoAssets/clippedex3.mp4';

export const initialState = {
  clipsFetched: false,
  clipsArray: [{ name: '', description: '', clip: null }],
};

/* eslint-disable default-case, no-param-reassign */
export default function clipsReducer(state = initialState, action) {
  if (action.type === 'FETCH') {
    state = {
      ...state,
      clipsFetched: true,
      clipsArray: [
        { name: 'Title Example 1', description: 'poop', clip: Clip },
        { name: 'Title Example 2', description: 'poop', clip: Clip2 },
        { name: 'Title Example 3', description: 'poop', clip: Clip3 },
        { name: 'Title Example 4', description: 'poop', clip: Clip2 },
      ],
    };
  }

  return state;
}

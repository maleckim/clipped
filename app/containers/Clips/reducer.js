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
        { name: 'matt', description: 'poop', clip: Clip },
        { name: 'matt', description: 'poop', clip: Clip2 },
        { name: 'matt', description: 'poop', clip: Clip3 },
        { name: 'matt', description: 'poop', clip: Clip2 },
      ],
    };
  }

  return state;
}

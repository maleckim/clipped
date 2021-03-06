import Clip from '../../demoAssets/clippedex1.mp4';
import Clip2 from '../../demoAssets/clippedex2.mp4';
import Clip3 from '../../demoAssets/clippedex3.mp4';

export const initialState = {
  clipsFetched: false,
  clipsArray: [{ id: '', name: '', description: '', clip: null }],
  clipsView: false,
};

/* eslint-disable default-case, no-param-reassign */
export default function clipsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH':
      state = {
        ...state,
        clipsFetched: true,
        clipsArray: [
          {
            id: '1',
            name: 'Title Example 1',
            description: 'poop',
            clip: Clip,
            votes: 3,
          },
          {
            id: '2',
            name: 'Title Example 2',
            description: 'poop',
            clip: Clip2,
            votes: 8,
          },
          {
            id: '3',
            name: 'Title Example 3',
            description: 'poop',
            clip: Clip3,
            votes: 1,
          },
          {
            id: '4',
            name: 'Title Example 4',
            description: 'poop',
            clip: Clip2,
            votes: 2,
          },
        ],
      };
      break;
    case 'USER_UPVOTE_SUCCESS':
      state = {
        ...state,
        clipsArray: [
          {
            id: '1',
            name: 'Title Example 1',
            description: 'poop',
            clip: Clip,
            votes: 4,
          },
          {
            id: '2',
            name: 'Title Example 2',
            description: 'poop',
            clip: Clip2,
            votes: 8,
          },
          {
            id: '3',
            name: 'Title Example 3',
            description: 'poop',
            clip: Clip3,
            votes: 1,
          },
          {
            id: '4',
            name: 'Title Example 4',
            description: 'poop',
            clip: Clip2,
            votes: 2,
          },
        ],
      };
  }

  return state;
}

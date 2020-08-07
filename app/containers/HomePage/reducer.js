export const initialState = {
  status: 'Offline',
  user: 'Matt',
};

/* eslint-disable default-case, no-param-reassign */
export default function homeReducer(state = initialState, action) {
  if (action.type === 'OUT') {
    state = { ...state, status: 'Offline' };
  } else {
    state = { ...state, status: 'Online' };
  }

  return state;
}

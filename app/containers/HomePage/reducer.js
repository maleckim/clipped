export const initialState = {
  status: 'Offline',
  user: 'Matt',
};

/* eslint-disable default-case, no-param-reassign */
export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'OUT':
      state = { ...state, status: 'Offline' };
      break;
    case 'IN':
      state = { ...state, status: 'Online' };
      break;
    default:
      return state;
  }
  return state;
}

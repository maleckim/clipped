export const initialState = {
  response: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      return { ...state, response: 'woo' };
    case 'LOGIN_USER_ERROR':
      return { ...state, response: 'bad' };
    default:
      return state;
  }
}

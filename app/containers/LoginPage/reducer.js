export default function(state = [], action) {
  const response = action.response;

  switch (action.type) {
    case :
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}

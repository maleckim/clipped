export default function loginUserAction(user) {
  return {
    type: 'LOGIN_USER',
    user,
  };
}

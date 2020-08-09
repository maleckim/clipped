export function registerUserService() {
  return 0;
}

export function loginUserService(request) {
  localStorage.setItem('user', 'fakeAuth');
  return {
    type: 'LOGIN_USER_SUCCESS',
    res: 'heelo',
  };
}

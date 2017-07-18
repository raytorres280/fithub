import dispatcher from '../dispatcher/AppDispatcher';

export function loginUser(user) {
  console.log('creating loginuser action');
  dispatcher.dispatch({
    type: 'LOGIN_USER',
    user
  });
}

export function logoutUser(user) {
  dispatcher.dispatch({
    type: 'LOGOUT_USER',
    user
  });


setTimeout(() => {
  dispatcher.dispatch({
    type: "RECEIVE_MENU",
    menuItems

  });
}, 1000);

}

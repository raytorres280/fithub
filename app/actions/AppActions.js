import dispatcher from '../dispatcher/AppDispatcher';

export function loginUser(user) {
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

export function getUser() {
  dispatcher.dispatch({
    type: "GET_USER"
  });
}

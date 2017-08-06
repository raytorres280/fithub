import dispatcher from '../dispatcher/AppDispatcher';

export function loginUser(user) {
  dispatcher.dispatch({
    type: 'LOGIN_USER',
    user
  });
}

export function logoutUser() {
  dispatcher.dispatch({
    type: 'LOGOUT_USER'
  });

}

export function getUser() {
  dispatcher.dispatch({
    type: "GET_USER"
  });
}

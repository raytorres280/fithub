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

export function createUser(user) {
  console.log('creating user...');
  fetch('http://localhost:8080/auth/signUp', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    if (!res[0][0].hasOwnProperty('userExists')) {
      dispatcher.dispatch({
        type: 'LOGIN_USER',
        res
      });
    }
    else {
      dispatcher.dispatch({
        type: 'USER_EXISTS'
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });
}

import EventEmitter from 'EventEmitter';

import dispatcher from '../dispatcher/AppDispatcher';

class AppStore extends EventEmitter {
  constructor() {
    super();
    this.user = {
      email: '',
      password: '',
      id: -1,
      name: '',
      age: 0,
      height: 0,
      weight: 0
    },
    this.isLoggedIn = false;
    this.loginFailed = false;
    this.date = new Date();
  }

  getUser() {
    return this.user;
  }

  setUser(usr) {
    this.user = usr;
  }

  setIsLoggedIn(isLoggedIn) {
    this.isLoggedIn = isLoggedIn;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  loginUser(user) {
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    })
    .then((res) => res.json())
    .then((resData) => {
      if(resData.email && resData.password) {
        this.setUser(resData);
        this.setIsLoggedIn(true);
      }
      this.emit('change');
    })
    .catch((err) => {
      console.log(err);
      this.emit('change');
    });

  }

  handleActions(action) {
    switch (action.type) {
      case 'LOGIN_USER':
        this.loginUser(action.user);
        break;
      case 'GET_USER':
        this.getUser();
        break;
      case 'GET_IS_LOGGED_IN':
        this.getIsLoggedIn();
        break;
      case 'LOGOUT_USER':
        this.user = null;
        this.emit('change');
        break;
    }
  }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));
export default appStore;

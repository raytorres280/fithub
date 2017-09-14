import EventEmitter from 'EventEmitter';
import {AsyncStorage} from 'react-native';
import dispatcher from '../dispatcher/AppDispatcher';

class AppStore extends EventEmitter {
  constructor() {
    super();
    this.user = {
      email: '',
      id: -1,
      name: '',
      age: 0,
      height: 0,
      weight: 0,
      calories_per_Day: 0,
      daily_req_carbs: 0,
      daily_req_fats: 0,
      daily_req_proteins: 0
    },
    this.isLoggedIn = false;
    this.loginFailed = false;
    this.date = new Date();
    this.rememberLogin = false;
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

  setRememberLogin(bool) {
    this.rememberLogin = bool;
  }
  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  loginUser(user) {
    fetch('https://macro-native-server.herokuapp.com/auth/login', {
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

      //did you get a row back?
      if(resData.email) {
        this.setUser(resData);
        this.setIsLoggedIn(true);

        //check if the user hit rememberLogin switch...
        if (user.rememberLogin) {
          console.log('user decided he wanted to save login info');

          let usr = Object.assign({}, user);
          // delete usr.rememberLogin;
          console.log(usr);
          AsyncStorage.setItem('user', JSON.stringify(usr), (err) => {
            if(err) {
              console.log(err);
            }
            else {
              console.log('no err');
            }
          });
        }
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
      case 'USER_EXISTS':
        this.emit('USER_EXISTS');
        break;
    }
  }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));
export default appStore;

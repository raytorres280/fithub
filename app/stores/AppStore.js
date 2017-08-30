import EventEmitter from 'EventEmitter';

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
  }

  checkDate(date) {
    //if the date retrieved from latest log (sorted) is not the
    //current date, create a new log.
  }
  getUser() {
    return this.user;
  }
  setUser(usr) {
    //console.log('in the setUser method of the store..');

    this.user = usr;
  }

  setIsLoggedIn(isLoggedIn) {
    //doo fetch here to see if it's possible.
    this.isLoggedIn = isLoggedIn;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  loginUser(user) {
    //do action login in here if it gets too big.
    // console.log(JSON.stringify({
    //   email: user.email,
    //   password: user.password
    // }));
    //console.log(user);
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
      if(resData.email) {
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
        //make methods for individual cases later.
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
      default:
        //console.log('no case for action...' + action.type);

    }
  }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));
export default appStore;

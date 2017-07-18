import EventEmitter from 'EventEmitter';

import dispatcher from '../dispatcher/AppDispatcher';

class AppStore extends EventEmitter {
  constructor() {
    super();
    this.user = {
      email: '',
      password: ''
    },
    this.isLoggedIn = false;
  }

  getUser() {
    console.log('in the get user method of store..');
    // fetch('api_goes_here').then((res) => {
    //   return res.json();
    // })
    // .then((results) => {
    //   this.setState({showProgress: false});
    //   //make a decision based on results what to set the user state to.
    // });
    return this.user;
  }

  setUser(usr) {
    console.log('in the setUser method of the store..');

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
    console.log(JSON.stringify({
      email: user.email,
      password: user.password
    }));
    console.log('logging in user ');
    console.log(user);
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
    .then((resData) => {
      console.log('no errors');
      console.log(resData);

      if (!resData.url.includes('/failure')) {
        console.log('not a fail');
        this.setUser(user);
        this.setIsLoggedIn(true);

        console.log(this.user);
      }
      else {
        console.log('itsa  fail');
      }


      console.log(this.user);
      this.emit('change');
    })
    .catch((err) => {
      console.log(err);
      this.emit('change');
    });

  }

  handleActions(action) {
    console.log('handling app store actions');
    switch (action.type) {
      case 'LOGIN_USER':
        //make methods for individual cases later.
        this.loginUser(action.user);
        break;
      default:
        console.log('no case for action...');

    }
  }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));
export default appStore;

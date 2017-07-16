import EventEmitter from 'EventEmitter';

import dispatcher from '../dispatcher/AppDispatcher';

class AppStore extends EventEmitter {
  constructor() {
    super();
    this.user = {
      email: '',
      password: ''
    }
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

  handleActions(action) {
    console.log('handling app store actions');
    switch (action.type) {
      case 'LOGIN_USER':
        //make methods for individual cases later.
        this.user = action.user;
        console.log('logging in user ');
        console.log(this.user);
        this.emit('change');
        break;
      default:
        console.log('no case for action...');

    }
  }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));
export default appStore;

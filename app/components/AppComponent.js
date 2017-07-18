import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS
} from 'react-native';

import Login from './Login';
import AppTabBar from './AppTabBar';

import AppStore from '../stores/AppStore';
import AppActions from '../actions/AppActions';


export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      user: AppStore.getUser(),
      isLoggedIn: AppStore.getIsLoggedIn()
    }
  }

  componentWillMount() {
    AppStore.addListener('change', () => {
      console.log('change detected');
      let user = AppStore.getUser();
      if (user.email && user.password) {
        console.log('in the if case.')
        console.log(user);
        this.setState({
          user: user,
          isLoggedIn: true
        });

      } else {
        //user not found
      }
    });

  }

  componentWillUpdate() {
    console.log(this.state.user)
  }
  componentDidMount() {
    let x = 0;
    console.log(this.state.user);
  }
  login(user) {
    //do the api.
    //then set the state.
    AppActions.login(user);
  }

  forgotPassword() {
    //change your view to forgot password screen
  }

  createAccount() {

  }

  render() {
    var component;
    if (this.state.isLoggedIn) {
      component = <AppTabBar user={this.state.user} />
    } else {
      component = <Login />
    }
    return (
      <View style={styles.container}>
        { component }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

AppRegistry.registerComponent('MacroNative', () => MacroNative);

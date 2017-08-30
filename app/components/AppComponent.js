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

import * as AppActions from '../actions/AppActions';
import * as MealActions from '../actions/MealActions';
import * as LogsTabActions from '../actions/LogsTabActions';

import AppStore from '../stores/AppStore';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      user: '',
      isLoggedIn: false,
      loginFailed: false
    }
  }

  componentDidMount() {
    AppStore.addListener('change', () => {
      let user = AppStore.getUser();

      if(user == null) {
        this.setState({
          isLoggedIn: false,
          user: ''
        });
        return 0;
      }

<<<<<<< HEAD
      if (user.email && user.password) {
=======
      if (user.email) {
        //console.log('good password');
        //console.log(user);
>>>>>>> HEAD@{1}
        this.setState({
          user: user,
          isLoggedIn: true
        });
        //populate the lower level stores.
        MealActions.getMeals(user);
        LogsTabActions.getLogs(user);
      } else {
          console.log('user not found');
          this.setState({ loginFailed: true });
          render();
      }
    });

  }

  login(user) {
    AppActions.login(user);
  }

  forgotPassword() {
    //change your view to forgot password screen
  }

  createAccount() {
    //change view to create account screen
  }

  render() {
    var component;
    var errMsg;
    if (this.state.isLoggedIn) {
      component = <AppTabBar user={this.state.user} />
    } else {
      component = <Login loginFailed={ this.state.loginFailed }/>
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
  errMsg: {
    color: 'red'
  }
});

AppRegistry.registerComponent('MacroNative', () => MacroNative);

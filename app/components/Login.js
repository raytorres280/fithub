import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  TextInput,
  Text,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import * as AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

export default class Login extends Component {

  constructor(props) {
    super(props);
    console.log('building the login screen');
    this.state = {
      email: '',
      password: '',
      showProgress: false,
      attemptedLogin: false
    }
  }

  loginUser() {
    console.log('testing button');
    this.setState({showProgress: true});
    console.log(this.state.email);
    console.log(this.state.password);
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    AppActions.loginUser(user);
    this.setState({ attemptedLogin: true });
  }

  createAccount() {
    console.log('creating account..');
  }

  render() {
    var errMsg;
    if (this.state.attemptedLogin && !this.state.email) {
      errMsg = <Text>'Login Failed. Email or pasword incorrect'</Text>
    }
    return(
      <View style={styles.container}>
        <TextInput
          autoCapitalize='none'
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          placeholder="email"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          placeholder="password"
        />
        <TouchableHighlight
          style={styles.loginBtn}
          onPress={() => this.loginUser()}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableHighlight>
        {/* bring create account button to bottom of screen. add forgot pwd */}
        <TouchableHighlight
          style={styles.loginBtn}
          onPress={() => this.createAccount()}
        >
          <Text style={styles.btnText}>Create Account</Text>
        </TouchableHighlight>

        <ActivityIndicator
          animating={this.state.showProgress}
          size="large"
        />
        { errMsg }
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    marginTop: 40
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'orange'
  },
  loginBtn: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: 'orange',
    borderRadius: 8,
    marginTop: 10,
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    color: '#FFF',
    alignSelf: 'center',
  },

}

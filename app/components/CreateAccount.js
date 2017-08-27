'use strict'

import React , { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
import * as AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

export default class CreateAccount extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      passwordMatch: null,
      first: '',
      last: '',
      age: 0,
      height: 0,
      weight: 0,
      email: '',
      password: '',
      userExists: false
    }
  }

  componentDidMount() {
    AppStore.addListener('USER_EXISTS', () => {
      this.setState({userExists: true});
    });
  }

  confirmPassword(text) {
    //check if passwords match
    if (text != this.state.password) {
      console.log('no match');
      this.setState({passwordMatch: false});
    }
    else {
      console.log('match');
      this.setState({passwordMatch: true});
    }
  }

  createAccount() {
    console.log(this.state);
    let s = this.state;
    let user = {
        first: s.first,
        last: s.last,
        age: s.age,
        height: s.height,
        weight: s.weight,
        email: s.email,
        password: s.password,
    }
    AppActions.createUser(user);
  }
  render() {
    let confirm = null;
    let user = {}
    let userExistsMsg = null;
    if (this.state.userExists) {
      userExistsMsg = <Text style={styles.errMsg}>Found User with Email</Text>
    }

    if (this.state.passwordMatch == false) {
      console.log('passwords dont match');
      confirm = <TextInput
        secureTextEntry={true}
        style={styles.err}
        onChangeText={(text) => this.confirmPassword(text)}
        placeholder="confirm password"
      />
    } else {
      confirm = <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(text) => this.confirmPassword(text)}
        placeholder="confirm password"
      />
    }

    return(
      <View style={styles.container}>
        {userExistsMsg}
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({first: text})}
          value={user.first}
          placeholder="first"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({last: text})}
          value={user.last}
          placeholder="last"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({age: text})}
          value={user.age}
          placeholder="age"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({height: text})}
          value={user.height}
          placeholder="height"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({weight: text})}
          value={user.weight}
          placeholder="weight"
        />
        <TextInput
          autoCapitalize='none'
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          value={user.email}
          placeholder="email"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          value={user.password}
          placeholder="password"
        />
        {/* confirm password comp */}
        {confirm}
        <TouchableHighlight
          style={styles.loginBtn}
          onPress={() => this.createAccount(user)}
        >
          <Text style={styles.btnText}>Create Account</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  err: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'crimson'
  },
  errMsg: {
    color: 'red'
  },
  indicator: {
    margin: 10
  }

});

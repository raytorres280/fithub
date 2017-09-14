import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  TextInput,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  Modal,
  Switch,
  AsyncStorage
} from 'react-native';

import * as AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

import CreateAccount from './CreateAccount';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: 'ray@aol.com', //hardcoded
      password: 'root', //hardcoded
      showProgress: false,
      modalVisible: false,
      rememberLogin: true //hardcoded
    }
  }

  componentWillMount() {
    if(this.props.loginFailed) {
      this.setState({ showProgress: false });
    }
  }

  componentDidMount() {
    // this.loginUser(); //hardcoded
  }

  componentWillUpdate() {
    if(this.props.loginFailed) {
      this.setState({ showProgress: false });
    }
  }

  componentDidUpdate() {
    if (!this.state.rememberLogin) {
      AsyncStorage.clear();
    }
  }
  loginUser() {
    this.setState({showProgress: true});
    let user = {
      email: this.state.email,
      password: this.state.password,
      rememberLogin: this.state.rememberLogin
    }
    AppActions.loginUser(user);
  }

  onCreateAccount() {
    // console.log('creating account..');
    this.setState({
      modalVisible: true
    })
  }

  render() {
    var errMsg;
    if (this.props.loginFailed) {
      errMsg = <Text style={ styles.err }>'Login Failed. Email or pasword incorrect'</Text>
      this.state.showProgress = false;
    }
    return(
      <View style={styles.container}>
        <View style={styles.logo}><Text>FitHub</Text></View>
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
        <Switch
          value={this.state.rememberLogin}
          style={styles.switch}
          onTintColor='orange'
          onValueChange={() => this.setState(
            {rememberLogin: !this.state.rememberLogin}
          )}
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
          onPress={() => this.onCreateAccount()}
        >
          <Text style={styles.btnText}>Create Account</Text>
        </TouchableHighlight>

        <ActivityIndicator
          style={styles.indicator}
          animating={this.state.showProgress}
          size="large"
        />
        { errMsg }


        <View style={{marginTop: 22}}>
          <Modal
            animationType={ "slide" }
            transparent={ false }
            visible={ this.state.modalVisible }
            >
              <CreateAccount />
            </Modal>
        </View>
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
  err: {
    color: 'red',
    margin: 5
  },
  indicator: {
    margin: 10
  },
  logo: {
    height: 100,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
  },
  switch: {
    marginLeft: 300,
    marginTop: 10
  }

}

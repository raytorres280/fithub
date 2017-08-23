import React, { Component } from 'react';

import {
  AppRegistry,
  View,
  ListView,
  StyleSheet,
  Text,
  Button,
  Modal,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native'

import LogsTabStore from '../stores/LogsTabStore';
import AppStore from '../stores/AppStore';
import * as AppActions from '../actions/AppActions';
import * as LogsTabActions from '../actions/LogsTabActions';

import Log from './Log';


const logs = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});



export default class LogsTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: AppStore.getUser()
    }
    //console.log(this.state.user);
  }

  componentDidMount() {
  }

  onSignOut() {
    //console.log('signing user out..');
    AppActions.logoutUser();
  }
  render() {

    return(
      <View style={ styles.list }>
        <Image
          source={require('../images/account.png')}
          style={styles.profilePic}
        />
      <Text style={styles.text}>email: {this.state.user.email}</Text>
        <Text style={styles.text}>age: {this.state.user.age}</Text>
        <Text style={styles.text}>height: {this.state.user.email}</Text>
        <Text style={styles.text}>weight: {this.state.user.weight}</Text>
      <TouchableHighlight
        onPress={() => this.onSignOut()}
        style={styles.signOutBtn}
        >
        <Text style={styles.signOutBtnText}>SIGNOUT</Text>
      </TouchableHighlight>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  },
  signOutBtn: {
    borderColor: '#c0392b',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 20

  },
  signOutBtnText: {
    color: '#c0392b',
    fontSize: 20
  },
  button: {
    flex: 1
  },
  profilePic: {
    height: 100,
    width: 100,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    marginTop: 20,
  }
})

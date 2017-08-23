import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class PurpleBtn extends Component {
  constructor(props) {
    super(props);
  }
  _handlePress() {
    //console.log('Pressed!');
  }
  render() {
    return (
      <Text>hello world!</Text>
    );
  }
};

AppRegistry.registerComponent('PurpleBtn', () => PurpleBtn);

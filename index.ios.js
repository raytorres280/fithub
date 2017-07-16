/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS
} from 'react-native';

import AppComponent from './app/components/AppComponent';

export default class MacroNative extends Component {
  constructor(props) {
    super(props);
    this.state={
      tabSelected: 'macros'
    }
  }
  changeTab(tabId) {
    this.setState({tabSelected: tabId});
  }

  render() {
    return (
      <View style={styles.container}>
        <AppComponent />
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

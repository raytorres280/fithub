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
  TabBarIOS
} from 'react-native';

var tabIcon1 = 'data:image/png;../public/ic_donut_small_2x.png'

export default class BottomNav extends Component {
  constructor(props) {
    super(props);
    console.log('entered BottomNav constructor..');
    this.state = {
      selectedTab: 'MacrosTab'
    }
  }


  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  };

  render() {
    return (
      <TabBarIOS
        tintColor="red"
        unselectedItemTintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Macros Tab"
          icon={{uri: tabIcon1, scale: 2}}
          selected={this.state.selectedTab === 'macrostab'}
          onPress={() => {
            this.setState({
              selectedTab: 'macrostab',
            });
          }}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BottomNav', () => BottomNav);

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

export default class CalorieTicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFull: false
    };
  }
  fillGlass() {
    this.setState({isFull: true});
  }
  emptyGlass() {
    this.setState({isFull: false});
  }
  render() {
    return (
      <View>
        
      </View>
    );
  }
};

const styles = StyleSheet.create({


});

AppRegistry.registerComponent('CalorieTicker', () => CalorieTicker);

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import * as LogsTabActions from '../actions/LogsTabActions';
import MacrosTabStore from '../stores/MacrosTabStore'
import AppStore from '../stores/AppStore';
import LogsTabStore from '../stores/LogsTabStore';

export default class GlassFullIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFull: props.isFull
    };
  }
  fillGlass() {
    this.setState({isFull: true});
  }
  emptyGlass() {
    this.setState({isFull: false});
  }
  drinkWater() {
    if (!isFull) {
      //this is stupid, UI updates are waiting on the server here.
      LogsTabActions.drinkWater(LogsTabStore.getActiveLog().id);
    }
    else {
      console.log('this cup is full.');
    }
  }
  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.drinkWater()}>
          {this.props.isFull ? <Image style={styles.glass} source={require('../public/glass-of-water.png')}/> : <Image style={styles.glass} source={require('../public/glass-empty.png')}/>}
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  glass: {
    width: 64,
    height: 64
  }

});

AppRegistry.registerComponent('GlassFullIcon', () => GlassFullIcon);

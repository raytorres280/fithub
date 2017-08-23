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
      //is this redundant from GlassOfWaterList instantiating them as false?
      isFull: this.props.isFull
    };
    console.log(this.state.isFull);
  }
  fillGlass() {
    //later add posibility to read user property that determines bottles vs cups.
    // MacrosTabStore.drinkWater();
    // LogsTabAction.drinkWater();
    this.setState({isFull: true});
  }
  emptyGlass() {
    this.setState({isFull: false});
  }
  drinkWater() {
    let a = AppStore.getUser();
    //console.log(LogsTabStore.getActiveLog().id);
    LogsTabActions.drinkWater(LogsTabStore.getActiveLog().id);
    this.setState({isFull: true});
  }
  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.drinkWater()}>
          {this.state.isFull ? <Image style={styles.glass} source={require('../public/glass-of-water.png')}/> : <Image style={styles.glass} source={require('../public/glass-empty.png')}/>}
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

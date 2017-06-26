import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import MacrosTabStore from '../stores/MacrosTabStore'

export default class GlassFullIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //is this redundant from GlassOfWaterList instantiating them as false?
      isFull: false
    };
  }
  fillGlass() {
    //later add posibility to read user property that determines bottles vs cups.
    MacrosTabStore.drinkWater();
    this.setState({isFull: true});
  }
  emptyGlass() {
    this.setState({isFull: false});
  }
  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.fillGlass()}>
          {this.state.isFull ? <Image style={styles.glass} source={require('../public/glass-of-water.png')}/> : <Image style={styles.glass} source={require('../public/glass-empty.png')}/>}
        </TouchableWithoutFeedback>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  glass: {
    width: 64,
    height: 64
  }

});

AppRegistry.registerComponent('GlassFullIcon', () => GlassFullIcon);

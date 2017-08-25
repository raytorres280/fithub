import React, { Component } from 'react';
import GlassOfWater from './GlassOfWater.js';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import LogsTabStore from '../stores/LogsTabStore';

export default class GlassList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      waterIntake: props.water,
      glasses: [
        {isFull: false},
        {isFull: false},
        {isFull: false},
        {isFull: false},
        {isFull: false},
        {isFull: false},
        {isFull: false},
        {isFull: false}
      ]
    }

  }

  componentWillReceiveProps(newProp) {
    let water = newProp.water;
    let glassArry = [
      {isFull: false},
      {isFull: false},
      {isFull: false},
      {isFull: false},
      {isFull: false},
      {isFull: false},
      {isFull: false},
      {isFull: false}
    ];

    for (let glass of glassArry) {
      if (water > 0 && !glass.isFull) {
        glass.isFull = true;
        water -= 8;
      }
    }
    this.setState({
      waterIntake: newProp,
      glasses: glassArry
    });
  }

  render() {
    return(
      <View>
        <View style={styles.waterIntake}>
          <GlassOfWater isFull={this.state.glasses[0].isFull}/>
          <GlassOfWater isFull={this.state.glasses[1].isFull}/>
          <GlassOfWater isFull={this.state.glasses[2].isFull}/>
          <GlassOfWater isFull={this.state.glasses[3].isFull}/>
        </View>
        <View style={styles.waterIntake}>
          <GlassOfWater isFull={this.state.glasses[4].isFull}/>
          <GlassOfWater isFull={this.state.glasses[5].isFull}/>
          <GlassOfWater isFull={this.state.glasses[6].isFull}/>
          <GlassOfWater isFull={this.state.glasses[7].isFull}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  waterIntake: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  }
});

AppRegistry.registerComponent('GlassOfWaterList', () => GlassOfWaterList);

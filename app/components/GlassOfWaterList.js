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

export default class GlassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waterIntake: this.props.water,
      glasses: [
        {isfull: false},
        {isfull: false},
        {isfull: false},
        {isfull: false}, //change later? 8 by 8 rule for now. static
        {isfull: false}, // maybe do it by weight or gender. gender little bit easier.
        {isfull: false}, //maybe change glasses to an int and spit out water glass components
        {isfull: false},
        {isfull: false}
      ]
    }
  }

  render() {
    return(
      <View>
        <View style={styles.waterIntake}>
          <GlassOfWater />
          <GlassOfWater />
          <GlassOfWater />
          <GlassOfWater />
        </View>
        <View style={styles.waterIntake}>
          <GlassOfWater />
          <GlassOfWater />
          <GlassOfWater />
          <GlassOfWater />
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

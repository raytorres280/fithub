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
    //console.log('water intake is: ' + this.props.water);
    this.state = {
      waterIntake: this.props.water,
      glasses: LogsTabStore.getActiveLogWater()
    }
    console.log(this.state.glasses);
    console.log(this.state.glasses[0].isFull);
  }

  componentDidMount() {
    LogsTabStore.addListener('change', () => {
      this.setState({glasses: LogsTabStore.getActiveLogWater()});
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

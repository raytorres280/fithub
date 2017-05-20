import React, { Component } from 'react';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';

import FlatButton from 'material-ui/FlatButton';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class MacrosTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proteinGaugeValue: 0,
      carbGaugeValue: 0,
      fatGaugeValue: 0
    };
  }

  render() {
    return (
      <View style={styles.macrostab}>
        <View style={styles.gauges}>
          <AnimatedGaugeProgress
            style={styles.proteinStyle}
            size={100}
            width={25}
            fill={this.state.proteinGaugeValue}
            rotation={90}
            cropDegree={180}
            tintColor="#4682b4"
            backgroundColor="#b0c4de"

          />
          <AnimatedGaugeProgress
            size={100}
            width={25}
            fill={this.state.carbGaugeValue}
            rotation={90}
            cropDegree={180}
            tintColor="#4682b4"
            backgroundColor="#b0c4de"
          />
          <AnimatedGaugeProgress
            size={100}
            width={25}
            fill={this.state.fatGaugeValue}
            rotation={90}
            cropDegree={180}
            tintColor="#4682b4"
            backgroundColor="#b0c4de"
          />
        </View>
        <View style={styles.gaugeLabels}>
          <Text>Protein</Text>
          <Text>Carbs</Text>
          <Text>Fats</Text>
        </View>
        <View style={styles.waterIntake}>
          <Text>Water Intake</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  macrostab: {
    flex: 1,
    flexDirection: 'column'
  },
  gauges: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 100
  },
  gaugeLabels: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  waterIntake: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  proteinStyle: {
    justifyContent: 'flex-start'
  }

});

AppRegistry.registerComponent('MacrosTab', () => MacrosTab);

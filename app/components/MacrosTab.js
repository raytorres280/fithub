import React, { Component } from 'react';
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';
import GlassList from './GlassOfWaterList.js';
import MacrosTabStore from '../stores/MacrosTabStore';
import MealsTab from './MealsTab';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableHighlight
} from 'react-native';

export default class MacrosTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proteinGaugeValue: MacrosTabStore.getMacros.protein,
      carbGaugeValue: MacrosTabStore.getMacros.carbs,
      fatGaugeValue: MacrosTabStore.getMacros.fats,
      modalVisible: false
    };
  }

  componentWillUnmount() {
    console.log('this destroys when new tab opens..');
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View style={styles.macrostab}>
        <View style={styles.title}>
          <Text allowFontScaling={false} style={styles.ticker}>1234</Text>
        </View>
        {/* <View style={styles.gauges}>
          <AnimatedGaugeProgress
            style={styles.proteinStyle}
            size={100}
            width={25}
            fill={this.state.proteinGaugeValue}
            rotation={90}
            cropDegree={0}
            tintColor="#F39"

          />
          <AnimatedGaugeProgress
            size={100}
            width={25}
            fill={this.state.carbGaugeValue}
            rotation={90}
            cropDegree={0}
            tintColor="#00BFFF"
          />
          <AnimatedGaugeProgress
            size={100}
            width={25}
            fill={this.state.fatGaugeValue}
            rotation={90}
            cropDegree={0}
            tintColor="#FC6"
          />
        </View> */}
        <View style={styles.gaugeLabels}>
          <Text>Protein</Text>
          <Text>Carbs</Text>
          <Text style={{paddingLeft: 25}}>Fats</Text>
        </View>

        <View>
          <GlassList />
        </View>

        <TouchableHighlight
          onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
          underlayColor="white"

          >
            <View
              style={ styles.btn }
              >
                <Text>
                  Test
                </Text>
            </View>
          </TouchableHighlight>

        <View style={{marginTop: 22}}>
          <Modal
            animationType={ "slide" }
            transparent={ false }
            visible={ this.state.modalVisible }
            >
              <View style={{ marginTop: 22 }}>
                  <TouchableHighlight
                    onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
                    underlayColor="white"
                    >
                    <View style={ styles.btn }>
                      <Text>
                        close
                      </Text>
                    </View>
                  </TouchableHighlight>

              </View>
              <MealsTab />
            </Modal>
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
  ticker: {
    fontSize: 100,
    color: 'white',
    backgroundColor: '#00D364'
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  gauges: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: 'powderblue'
  },
  gaugeLabels: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: 10,
    paddingRight: 25,
    backgroundColor: 'skyblue'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  proteinStyle: {
    justifyContent: 'flex-start'
  },
  btn: {
    backgroundColor: 'deepskyblue',
    padding: 5,
    borderWidth: 10,
    borderRadius: 15,
    borderColor: 'deepskyblue'
  }

});

AppRegistry.registerComponent('MacrosTab', () => MacrosTab);

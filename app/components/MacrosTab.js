import React, { Component } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import GlassList from './GlassOfWaterList.js';
import MacrosTabStore from '../stores/MacrosTabStore';
import LogsTabStore from '../stores/LogsTabStore';
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
      log: LogsTabStore.getActiveLog(),
      modalVisible: false
    };
  }

  componentWillUnmount() {
    // console.log('this destroys when new tab opens..');
  }

  componentDidMount() {
    LogsTabStore.addListener('change', () => {
      //console.log('the current log has changed.');
      //console.log(LogsTabStore.getActiveLog());
      this.setState({
        log: LogsTabStore.getActiveLog()
      });
    });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  // addMealToLog(meal) {
  //   LogsTabActions.addMealToLog(meal);
  // }

  render() {
    let proteins = 0,
    carbs = 0,
    fats = 0,
    calories = 0,
    water = 0;
    console.log('macrostab rendered');

    if(this.state.log != null) {
      proteins = this.state.log.total_proteins;
      carbs = this.state.log.total_carbs;
      fats = this.state.log.total_fats;
      calories = this.state.log.total_calories;
      water = this.state.log.total_water;
    }

    return (
      <View style={styles.macrostab}>
        <View style={styles.title}>
          <Text allowFontScaling={false} style={styles.ticker}>{calories}</Text>
        </View>
        <View style={styles.gauges}>
          <AnimatedCircularProgress
            size={100}
            width={15}
            fill={proteins}
            tintColor="#F39"
            backgroundColor="#3d5875"
          />
          <AnimatedCircularProgress
            size={100}
            width={15}
            fill={carbs}
            tintColor="#00BFFF"
            backgroundColor="#3d5875"
          />
          <AnimatedCircularProgress
            size={100}
            width={15}
            fill={fats}
            tintColor="#FC6"
            backgroundColor="#3d5875"
          />
        </View>
        <View style={styles.gaugeLabels}>
          <Text>Protein</Text>
          <Text>Carbs</Text>
          <Text style={{paddingLeft: 25}}>Fats</Text>
        </View>

        <View style={styles.glassListContainer}>
          <GlassList water={water}/>
        </View>

        <TouchableHighlight
          onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
          underlayColor="white"

          >
            <View style={ styles.btn }>
              <Text
                fontSize={20}
                >
                Add Meal
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
    backgroundColor: '#00D364',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#00D364',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10
  },
  gauges: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  gaugeLabels: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: 10,
    paddingRight: 25,
  },
  glassListContainer: {
    backgroundColor: '#3498db',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
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
    height: 50,
    backgroundColor: 'deepskyblue',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 10,
    borderRadius: 5,
    borderColor: 'deepskyblue',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('MacrosTab', () => MacrosTab);

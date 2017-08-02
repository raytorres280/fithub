import React, { Component } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
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
      log: null,
      modalVisible: false
    };
  }

  componentWillUnmount() {
    console.log('this destroys when new tab opens..');
  }

  componentDidMount() {
    LogsStore.addListener('change', () => {
      console.log('the current log has changed.');
      this.state.log = LogsTabStore.getActiveLog();
    });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    let proteins = 0,
    carbs = 0,
    fats = 0;
    if(this.state.log != null) {
      proteins = this.state.log.proteins;
      carbs = this.state.log.carbs;
      fats = this.state.log.fats;
      console.log('in the if case.');
    }
    console.log(proteins);
    return (
      <View style={styles.macrostab}>
        <View style={styles.title}>
          <Text allowFontScaling={false} style={styles.ticker}>1234</Text>
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

        <View>
          <GlassList />
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
    flex: 1,
    fontSize: 100,
    color: 'white',
    backgroundColor: '#00D364'
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    margin: 5,
    borderWidth: 10,
    borderRadius: 5,
    borderColor: 'deepskyblue',
    justifyContent: 'center',
    alignItems: 'center'
  }/* Rectangle: */
// background: #F9FAFB;
// box-shadow: 0 26px 90px 0 rgba(51,59,69,0.10), 0 0 20px 0 rgba(215,222,227,0.39);
// border-radius: 10px;
// /* Strategy.pdf: */
// font-family: .AppleSystemUIFont;
// font-size: 15px;
// color: #434B52;
// letter-spacing: 0;
// /* LAST EDITED JUN 28,: */
// font-family: .AppleSystemUIFont;
// font-size: 9px;
// color: #1F8EFA;
// letter-spacing: 2px;
// /* Shape: */
// background: #526C8B;
// /* Shape: */
// border: 2px solid #526C8B;
// /* Shape: */
// border: 2px solid #526C8B;
// /* Shape: */
// border: 2px solid #526C8B;
// /* Shape: */
// border: 2px solid #526C8B;
// /* Shape: */
// border: 2px solid #526C8B;

});

AppRegistry.registerComponent('MacrosTab', () => MacrosTab);

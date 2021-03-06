import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Log extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.card }>
        <Text>
          Date: { this.props.date } {'\n'}
          Proteins: { this.props.totalProteins } {'\n'}
          Carbs: { this.props.totalCarbs } {'\n'}
          Fats: { this.props.totalFats } {'\n'}
          Water: { this.props.totalWaterIntake } {'\n'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    // height: ,
    // width: ,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
  },
  addBtn: {
    backgroundColor: "purple"
  }
});

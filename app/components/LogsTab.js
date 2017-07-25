import React, { Component } from 'react';

import {
  AppRegistry,
  View,
  ListView,
  StyleSheet,
  Text,
  Button,
  Modal,
  TextInput
} from 'react-native'

import LogsTabStore from '../stores/LogsTabStore';

import * as AppActions from '../actions/AppActions';
import * as LogsTabActions from '../actions/LogsTabActions';

import Log from './Log';


const logs = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});



export default class LogsTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logList: logs
    }
  }

  componentWillMount() {
    console.log(this.props.user);
    let user = this.props.user;
    let rows = LogsTabStore.getLogs();
    if (rows == undefined) {
      rows = []
    }
    this.setState({
      logList: logs.cloneWithRows(rows)
    });
  }
  componentDidMount() {
    LogsTabStore.addListener('change', () => {
      this.setState({
        logList: logs.cloneWithRows(LogsStore.getLogs())
      });
    });
  }

  addLog(log) {
    console.log(log);
    LogsTabActions.addLog(log);

  }




  render() {
    // console.log(testLog); data still intact here..

    const testLog = {
      date:Date.now(),
      totalProtein: 20,
      totalCarbs: 20,
      totalFats: 20,
      totalWaterIntake: 125,
      totalCalories: 100

    }


    return(
      <View style={ styles.list }>
        <Button
          title='add Log'
          color='red'
          onPress={() => this.addLog(testLog)}
        />
        <ListView
          dataSource={ this.state.logList }
          renderRow={ (rowData) => {
            return <Log
              id={ rowData.date }
              totalProtein={ rowData.totalProtein }
              totalCarbs={ rowData.totalCarbs }
              totalFats={ rowData.totalFats }
              totalWaterIntake={ rowData.totalWaterIntake }
              totalActivity={ rowData.totalActivity }

            />
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'blue',
    flex: 1
  },
  button: {
    flex: 1
  }
})

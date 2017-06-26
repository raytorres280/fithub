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

import LogsStore from '../stores/LogsStore';
import * as LogActions from '../actions/LogActions';
import Log from './Log';


const logs = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});



export default class LogsTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      logList: logs.cloneWithRows(LogsStore.getAll())
    }
  }

  componentWillMount() {
    LogsStore.addListener('change', () => {
      this.setState({
        logList: logs.cloneWithRows(LogsStore.getAll())
      });
    });
  }

  addLog(log) {
    console.log(log);
    LogActions.addLog(log);

  }




  render() {
    // console.log(testLog); data still intact here..

    const testLog = {
      id:Date.now(),
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
              id={ rowData.id }
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

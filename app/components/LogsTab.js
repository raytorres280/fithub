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
        logList: logs.cloneWithRows(LogsTabStore.getLogs())
      });
    });
  }

  addLog(log) {
    LogsTabActions.addLog(log);

  }




  render() {

    return(
      <View style={ styles.list }>
        <ListView
          dataSource={ this.state.logList }
          renderRow={ (rowData) => {
            return <Log
              key={ rowData.id }
              id={ rowData.id }
              date={ rowData.log_date }
              totalProteins={ rowData.total_proteins }
              totalCarbs={ rowData.total_carbs }
              totalFats={ rowData.total_fats }
              totalWaterIntake={ rowData.total_water }
              totalActivity={ rowData.total_activity }

            />
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#3498db',
    flex: 1
  },
  button: {
    flex: 1
  }
})

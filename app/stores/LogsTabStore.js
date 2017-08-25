import EventEmitter from 'EventEmitter';
import dispatcher from '../dispatcher/AppDispatcher';

//this is prob antipattern. Change later when everything is in one store.
import AppStore from './AppStore';
import * as LogsTabActions from '../actions/LogsTabActions';

class LogsTabStore extends EventEmitter {
  constructor() {
    super()
    this.user = AppStore.getUser();
    this.logs = [

    ];
    this.activeLog = null;
    this.activeLogWater = [
      {isFull: false},
      {isFull: false},
      {isFull: false},
      {isFull: false},
      {isFull: false},
      {isFull: false},
      {isFull: false},
      {isFull: false}
    ]
  }

  getUser() {
    return this.user;
  }

  getLogs() {
    return this.logs;
  }

  getActiveLog() {
    return this.activeLog;
  }

  getActiveLogWater() {
    return this.activeLogWater;
  }

  addLog() {
    let log = {
      total_calories: 0,
      total_proteins: 0,
      total_carbs: 0,
      total_fats: 0,
      total_water: 0,
      total_activity: 0,
      weigh_in: 0,
      user_id: AppStore.getUser().id,
      log_date: new Date()
    };
    fetch('http://localhost:8080/api/createLog', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log)
    })
    .then((res) => res.json())
    .then((response) => {
      let logs = response;
      //probably should remove this later, getting whole list of logs
      //just to refresh for newest one...
      dispatcher.dispatch({
        type: 'GET_LOGS',
        logs
      });
    });
  }

  loadLogs(logs) {
    this.logs = logs.sort().reverse();
    if(logs[0] == null) {
      this.addLog();
      return 0;
    }
    if (new Date(this.logs[0].log_date).getMonth() == new Date().getMonth()
     && new Date(this.logs[0].log_date).getDay() == new Date().getDay()) {
      console.log('this means that the latest date ' +
      'from db is the current date');
      this.activeLog = this.logs[0];

      this.emit('change');
    }
    else {
      console.log("or it's not the latest and you have to create a new one");
      this.addLog();
    }


  }

  drinkWater() {
    this.activeLog.total_water += 8;
    this.emit('change');
  }
  handleActions(action) {
    switch(action.type) {
      case 'GET_LOGS':
        this.loadLogs(action.logs);
        break;
      case 'ADD_MEAL_TO_LOG':
        LogsTabActions.getLogs(this.user);
        //later do something with active log, instead of refetching fresh set.
        //maybe search active by id, re render that one after proc calls.
        break;
      case 'REFRESH_LOGS':
        let newMealList = action.meals[0].sort().reverse();
        this.logs = newMealList;
        this.activeLog = newMealList[0];
        this.emit('change');
        break;
      case 'DRINK_WATER':
        this.drinkWater();
        break;
    }
  }
}

const logsStore = new LogsTabStore;
dispatcher.register(logsStore.handleActions.bind(logsStore));
export default logsStore;

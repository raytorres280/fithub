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
      // //console.log(response);
      //console.log('got response');
      let logs = response;
      // //console.log(logs);
      //probably should remove this later, getting whole list of logs
      //just to refresh for newest one...
      dispatcher.dispatch({
        type: 'GET_LOGS',
        logs
      });
    });
  }

  loadLogs(logs) {
    //console.log('getting logs..');
    // //console.log(logs);
    this.logs = logs.sort().reverse();
    // //console.log(logs);
    // //console.log(new Date(this.logs[0].log_date).getMonth());
    if(logs[0] == null) {
      //console.log('you have an empty arry');
      this.addLog();
      return 0;
    }
    //console.log(new Date(this.logs[0].log_date).getMonth());
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
    for (let cup in activeLogWater) {
      if (!cup.isFull) {
        cup.isFull = true;
        this.emit('change');
      }
    }
  }
  handleActions(action) {
    // //console.log('logsstore received an action.', action);
    switch(action.type) {
      case 'ADD_LOG':
        //console.log('adding log to list...');
        this.logs.push(action.log);
        //console.log(this.logs);
        this.emit('change');
        break;
      case 'GET_LOGS':
        this.loadLogs(action.logs);
        // this.emit('change');
        break;
      case 'CREATE_LOG':
      //deprecate, you never need to create one other than initial load.
        //console.log('creating a log..');
        this.logs.push(action.log);
        break;
      case 'ADD_MEAL_TO_LOG':
        LogsTabActions.getLogs(this.user);
        //later do something with active log, instead of refetching fresh set.
        //maybe search active by id, re render that one after proc calls.
        break;
      case 'REFRESH_LOGS':
        //console.log('updating log list..');
        //console.log(action.meals[0]);
        let newMealList = action.meals[0].sort().reverse();
        //console.log(newMealList);
        this.logs = newMealList;
        this.activeLog = newMealList[0];
        this.emit('change');
        break;
      case 'DRINK_WATER':
        //console.log('drinking water..');
        drinkWater();
    }
  }
}

const logsStore = new LogsTabStore;
dispatcher.register(logsStore.handleActions.bind(logsStore));
export default logsStore;

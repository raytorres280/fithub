import EventEmitter from 'EventEmitter';


//bring in some kind of module/service that connects to db.

import dispatcher from '../dispatcher/AppDispatcher';

class LogsTabStore extends EventEmitter {
  constructor() {
    super()
    this.logs = [

    ],
    this.activeLog = null;
  }

  getLogs() {
    return this.logs;
  }

  getActiveLog() {
    return this.activeLog;
  }

  addLog(log) {
    this.logs.push({
      date: Date('Dec 24, 1984'),
      totalProtein: log.totalProtein,
      totalCarbs: log.totalCarbs,
      totalFats: log.totalFats,
      totalWaterIntake: log.totalWaterIntake,
      totalCalories: log.totalCalories
    });

    this.emit('change');
  }

  handleActions(action) {
    // console.log('logsstore received an action.', action);
    switch(action.type) {
      case 'ADD_LOG':
        console.log('adding log to list...');
        this.logs.push(action.log);
        console.log(this.logs);
        this.emit('change');
        break;
      case 'GET_LOGS':
        console.log('getting logs..');
        console.log(action.logs);
        this.logs = action.logs;
        this.logs = this.logs.sort().reverse();
        console.log(new Date(this.logs[0].log_date).getMonth());
        if (new Date(this.logs[0].log_date).getMonth() == new Date().getMonth()
         && new Date(this.logs[0].log_date).getDay() == new Date().getDay()) {
          console.log('this means that the latest date ' +
          'from db is the current date');
          

        }
        break;
      case 'CREATE_LOG':
      console.log('creating a log..');
      this.logs.push(action.log);
      break;
    }
  }
}

const logsStore = new LogsTabStore;
dispatcher.register(logsStore.handleActions.bind(logsStore));
export default logsStore;

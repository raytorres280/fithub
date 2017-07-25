import EventEmitter from 'EventEmitter';


//bring in some kind of module/service that connects to db.

import dispatcher from '../dispatcher/AppDispatcher';

class LogsTabStore extends EventEmitter {
  constructor() {
    super()
    this.logs = [

    ]
  }

  getLogs() {
    return this.logs;
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

  getInitialLogs(user) {
    console.log('fetching initial render info for logs from db..');
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
        this.logs = action.logs;
    }
  }
}

const logsStore = new LogsTabStore;
dispatcher.register(logsStore.handleActions.bind(logsStore));
export default logsStore;
